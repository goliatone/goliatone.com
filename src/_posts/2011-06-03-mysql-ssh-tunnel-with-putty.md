---
title: "MySQL SSH tunnel with putty"
date: 2011-06-03
description: "Linode guide, how to"
---
Just a quick note to an [article](http://library.linode.com/databases/mysql/mysql-ssh-tunnel) on linode's library that explains how to make a mysql tunnel on Windows with putty.

Just remember that while you have the tunnel open all calls to localhost will get..well, tunneled, meaning that you will not be able to connect to your local phpmyadmin.
