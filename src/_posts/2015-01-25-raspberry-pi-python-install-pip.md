---
title: "Raspberry Pi Python Install Pip"
date: 2015-01-24
template: "post.hbs"
---

# How to install pip on raspberry pi

One way to install `pip` on your raspberry pi:

```terminal
$ sudo apt-get install python-setuptools
```
Setup tools include `easy_install`, which you can use to install `pip`:

```terminal
$ sudo easy_install pip
```

If you have multiple versions of Python- or are running Python 3- then use the specific `easy_install` version: `easy_install3.2` or `easy_install2.7`


You can also use the `get-pip.py` script using `wget` and python:

```terminal
wget https://raw.github.com/pypa/pip/master/contrib/get-pip.py
sudo python get-pip.py
```