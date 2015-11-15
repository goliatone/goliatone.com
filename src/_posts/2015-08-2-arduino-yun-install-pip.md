---
title: "Arduino Yun Install Pip"
date: 2015-08-2
template: "post.hbs"
---


If you want to install `pip` on the Yún, you can follow this commands:

The first thing you need to do is update the package manager.
```
$ opkg update
```

From here, we just follow the normal steps to install `pip` using `easy_install`

```
$ opkg install distribute
```

We need to install python's openssl library
```
$ opkg install python-openssl
```

Now, just `easy_install` `pip`
```
$ easy_install pip
```
