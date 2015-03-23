---
title: "Kohana PHP Error"
date: 2011-09-24
description: "Hello Toto post"
---

Installing a Kohana application is pretty straight forward. There is a php install script that verifies the environment to make sure all goes smoothly once up and running.

You have to make sure the `application/cache` and `application/logs` directories are writable by the server, and this one thing goes unnoticed by the script. So you might run your application and run into this error:

`Kohana Error: The log directory is not writable`

If you are running Apache in Ubuntu, you would have to:

    sudo chown www-data:www-data application/{cache,logs}
    chmod 0770 application/{cache,logs}

If you make logs owned by www-data, but you had folders inside that are not, it will fail and not complain anywhere. You would get a PHP error such as:

` PHP Fatal error:  Exception thrown without a stack frame in Unknown on line 0.` 

The mistake with the previous command was that it assumed the folders were empty. We can add the `-R` parameter and it should be all good in all cases.