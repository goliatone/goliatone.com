---
title: "Mac Create Local Development Domain"
date: 2013-09-21
template: "post.hbs"
---

## Note to self

### Create local development site:

Add entry to Apache vhosts file:

```bash
/opt/local/apache2/conf/extra/httpd-vhosts.conf
```

```xml
#############################
## ONEIRIC SITE DEV.
#############################
<VirtualHost *:80>
    <Directory "/Users/goliatone/Development/www/dreamcach.lc">
        Options Indexes FollowSymLinks
        AllowOverride All
        Order deny,allow
        Allow from all
        Satisfy all

        ###################################################
        #THIS IS WHAT YOUR WILL BE ADDING BELOW
        IndexIgnore /
        RewriteEngine on
        # if a directory or a file exists, use it directly
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d

        # otherwise forward it to index.php
        RewriteRule . index.php
        #THIS IS WHAT YOUR WILL BE ADDING ABOVE
        ###################################################
    </Directory>

    ServerAdmin admin@goliatone.com
    DocumentRoot "/Users/goliatone/Development/www/dreamcach.lc"
    ServerName dreamcach.lc
    ServerAlias dreamcachetest
    ErrorLog /private/var/log/apache2/dreamcach-error_log
    CustomLog /private/var/log/apache2/dreamcach-access_log common
</VirtualHost>
```

### Restart Apache:

```bash
sudo /opt/local/apache2/bin/apachectl -k restart
```


### Edit hosts file:

```terminal
sudo nano /private/etc/hosts
```

```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1   localhost
255.255.255.255 broadcasthost
::1             localhost
fe80::1%lo0 localhost

##Dev stuff
127.0.0.1   dreamcach.lc
```


### Create symbolic link:
```terminal
ln -s ~/Development/ONEIRIC/dreamcach-website/app/ ~/Development/www/dreamcach.lc
```

### Flush DNS cache:

The DNS request for that domain may already be cached. To clear the cached entry, run this command on the command line.

```terminal
dscacheutil -flushcache
```


### Forwarding to a localhost port

In the example so far, I assumed you had an app that could be run under Apache. If you are running your app with a Vagrant setup- you should- or a pure node.js app

```xml
<VirtualHost *:80> 
  ProxyPreserveHost On
  ProxyRequests Off
  ServerName dreamcach.lc
  ServerAlias dreamcach.lc
  ProxyPass / http://localhost:8080/app/
  ProxyPassReverse / http://localhost:8080/app/
</VirtualHost> 
```
