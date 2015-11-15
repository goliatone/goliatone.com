---
title: "Django Management Command Dumpdb"
date: 2013-09-18
template: "post.hbs"
---

## Django management command: dumpdb

Simple command to dump database content into a file, and upload it to an S3 bucket.

GIST REF: https://gist.github.com/goliatone/6627702

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.core.management.base import BaseCommand
# from django.core.management.base import CommandError
from optparse import make_option
from django.conf import settings
import os
import sys
from boto.s3.connection import S3Connection
from boto.s3.key import Key
from subprocess import Popen, PIPE
# import logging
from time import sleep

# log = logging.getLogger(__name__)
"""
Django management command to dump database content and then upload to S3
"""

HELP = ['Takes a snapshot of the database and upload to S3',
        'Usage:',
        "\t\t\tpython manage.py dumpdb -d default -b raam-dump-test"
        ]


class Command(BaseCommand):

    help = "\n".join(HELP)

    option_list = BaseCommand.option_list + (
        make_option(
            "-d",
            "--database",
            dest="database",
            default='default',
            help='Database router id.',
            metavar="DATABASE"
        ),

        make_option(
            "-b",
            "--bucket",
            dest="bucket",
            #raam-dump-test
            default='dumpdb-bucket',
            help="S3 bucket name",
            metavar="BUCKET"
        ),
    )

    def handle(self, *args, **options):

        self.file_name = 'dump.dat'
        self.target = options['database']
        self.bucket_name = options['bucket']
        self.database_settings = settings.DATABASES[self.target]

        self.stdout.write("Execute dumpdb command: %s " % self.target)

        dump = self.dump_database()

        file_path = self.get_file_path()

        self.save_dump_to_file(file_path, dump)

        self.upload_dump_to_S3(self.bucket_name, file_path)

    def get_file_path(self):
        return './%s' % self.file_name

    def dump_database(self):
        print "Dump output ready..."
        dumper_method = self.get_dump_method()
        return dumper_method(self.database_settings['NAME'])

    def get_dump_method(self):
        # TODO: Abstract getting settings to method!
        database_engine = self.database_settings['ENGINE']

        # get the right dumper based on DDBB
        dumper_type = self.get_dumper_type(database_engine)
        return getattr(self, dumper_type)

    def save_dump_to_file(self, file_name, dump):
        print "Create dump file..."
        file = open(file_name, 'w+')
        file.write(dump)
        file.close()

    def upload_dump_to_S3(self, bucket_name, file_name):
        print "Pushing to S3..."
        # updload tmp file
        conn = S3Connection()
        bucket = conn.create_bucket(bucket_name)
        manager = self.upload_manager(self.upload_done)
        k = Key(bucket)
        k.key = os.path.basename(file_name)
        k.set_contents_from_filename(file_name,
                                     cb=manager, num_cb=20)

    def get_postgresql_psycopg2_dump(self, database):
        params = ["sudo", "-u", "postgres", "pg_dump", "--data-only", database]
        return self.execute_dump(params)

    def get_mysql_dump(self, database):
        params = ['mysqldump', '--user=root',
                  '--no-create-db', '--no-create-info', database]
        return self.execute_dump(params)

    def get_sqlite3_dump(self, database):
        pass
        params = ['sqlite3', 'nuskin/nuskin-cms.db',
                  '.dump', '|', 'grep', '"INSERT"']
        return self.execute_dump(params)

    def execute_dump(self, params):
        process = Popen(params, stdout=PIPE)
        output = process.communicate()[0]
        return output

    def upload_manager(self, on_done):
        """
        Wrap the progress method so that we can bundle a callback
        on done. We need this because we can't append the callback
        in the progress callback.
        """
        def _upload_progress(loaded=0, total=0, delay=0.4):
            percent = int((loaded*100)/total)
            remainder = 100 - percent
            output = '[{0}{1}] {2}%\r'.format('#'*percent,
                                              ' '*remainder, percent)
            if percent == 100:
                output = output + '\n'
                delay = 0
            sys.stderr.write(output)
            sleep(delay)
            # We are done!
            if percent == 100:
                on_done()

        return _upload_progress

    def upload_done(self):
        # get the file name and make path
        file_name = './%s' % self.file_name
        os.remove(file_name)
        print "Cleaning up. Done!"

    def get_dumper_type(self, engine):
        """

        """
        # django.db.backends.postgresql_psycopg2
        # django.db.backends.mysql
        # django.db.backends.sqlite3
        p = "django.db.backends."
        return 'get_%s_dump' % engine.replace(p, "")
```
