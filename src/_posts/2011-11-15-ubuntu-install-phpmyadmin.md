---
title: "Ubuntu Install Phpmyadmin"
date: 2011-11-14
template: "post.hbs"
---

http://library.linode.com/databases/mysql/phpmyadmin-ubuntu-10.10-maverick

apt-get update
apt-get upgrade --show-upgraded

phpMyAdmin requires the mcrypt PHP module
apt-get install php5-mcrypt
/etc/init.d/apache2 restart


Installing phpMyAdmin
apt-get install phpmyadmin


Configuring phpMyAdmin
cd /srv/www/ducklington.org/public_html
sudo ln -s /usr/share/phpmyadmin

Securing phpMyAdmin

I HAD TO DO THIS TO ACTUALLY MAKE IT WORK. http://www.frihost.com/forums/vt-98071.html
sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf.d/phpmyadmin.conf
sudo /etc/init.d/apache2 restart

TROUBLESHOTING
http://www.hardened-php.net/hphp/troubleshooting.html