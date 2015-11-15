---
title: "Python Django Create Global Management Command"
date: 2013-09-10
template: "post.hbs"
---


To create a global command:
TODO: Create gist.

NOTE: Have a *core* app to store global commands and, generally speaking, things not tied to any application.

http://stackoverflow.com/questions/5210690/how-to-do-a-project-wide-custom-django-admin-command

```python
from django.core.management.base import BaseCommand, CommandError
from optparse import make_option
from django.contrib.auth.models import User


class Command(BaseCommand):
    # args = '<user user pass pass...>'
    help = 'Closes the specified poll for voting'

    option_list = BaseCommand.option_list + (
        make_option(
            "-u",
            "--username",
            dest="username",
            help="specify user name",
            metavar="USER"
        ),
    )

    option_list = option_list + (
        make_option(
            "-p",
            "--password",
            dest="password",
            help="user password, make it strong",
            metavar="SLUG"
        ),
    )

    def handle(self, *args, **options):

        if options['user'] is None:
                raise CommandError("Option `--user=...` must be specified.")

        if options['password'] is None:
                raise CommandError("Option `--password=...` must be specified.")

        self.stdout.write("Bootstraping CMS...")

        username = options['username']
        password = options['password']

        if User.objects.count() == 0:
            admin = User.objects.create(username=username)
            admin.set_password(password)
            admin.is_superuser = True
            admin.is_staff = True
            admin.save()
            self.stdout.write("Created user " + username)
        else:
            self.stdout.write("Found existing user.")
            ```