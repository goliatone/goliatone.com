---
title: "Python Fata Error No Such File or Directory Python H"
date: 2015-03-9
template: "post.hbs"
---

## Solve Fatal Error: Python.h No such file or directory

While installing `zeroconf`, **pip** failed with the following error:
>netifaces.c:1:20: fatal error: Python.h: No such file or directory

To solve it, install python dev:

```terminal
sudo apt-get install python2.7-dev 
```

If **apt-get** fails to find the **deb** urls:
>Failed to fetch http://mirrordirector.raspbian.org/raspbian/pool/main/o/openssl/libssl-dev_1.0.1e-2+rvt+deb7u10_armhf.deb  404  Not Found

Try to update:

```terminal
$ sudo apt-get update
```

The full error stack:

```terminal
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libexpat1-dev libssl-dev libssl-doc python2.7-dev
The following NEW packages will be installed:
  libexpat1-dev libssl-dev libssl-doc python-dev python2.7-dev
0 upgraded, 5 newly installed, 0 to remove and 0 not upgraded.
Need to get 2,708 kB/31.6 MB of archives.
After this operation, 42.2 MB of additional disk space will be used.
Do you want to continue [Y/n]? 
Err http://mirrordirector.raspbian.org/raspbian/ wheezy/main libssl-dev armhf 1.0.1e-2+rvt+deb7u10
  404  Not Found
Err http://mirrordirector.raspbian.org/raspbian/ wheezy/main libssl-doc all 1.0.1e-2+rvt+deb7u10
  404  Not Found
Failed to fetch http://mirrordirector.raspbian.org/raspbian/pool/main/o/openssl/libssl-dev_1.0.1e-2+rvt+deb7u10_armhf.deb  404  Not Found
Failed to fetch http://mirrordirector.raspbian.org/raspbian/pool/main/o/openssl/libssl-doc_1.0.1e-2+rvt+deb7u10_all.deb  404  Not Found
E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?
```
