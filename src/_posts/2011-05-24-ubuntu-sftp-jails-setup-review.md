---
title: "Ubuntu SFTP jails setup review"
date: 2011-05-24
---

After setting up a SFTP only chroot jail I had to log with Filezilla and got error:
    Error:	Server unexpectedly closed network connection
    Error:	Unable to connect to server

The set up was working previously so I had no idea what was going on. In those cases, just check your logs:
    nano /var/log/auth.log

In my case, I found this pesky line:
    fatal: bad ownership or modes for chroot directory "/srv/www/a-domain.com/public_html"

To check what `chroot` a user has:
    nano /etc/passwd <= we hav a a list of all users and its home directory.

The structure has to be so that the user's `chroot` has to be owned by root and not writable by the group.