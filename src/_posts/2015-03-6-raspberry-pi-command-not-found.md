---
title: "Raspberry Pi Command Not Found"
date: 2015-03-6
template: "post.hbs"
---

# Raspberry Pi: command not found

I was trying to use a BLE dongle with a raspberry pi, and got this error:

```terminal
sudo: hcidump: command not found
```

## command-not-found

There is a package `command-not-found` that provides help.

```terminal
$ sudo apt-get install command-not-found 
```

After you install it, you need to update the database:
```terminal
$ sudo update-command-not-found 
```


sudo hcidump --raw & sudo hcitool lescan

sudo apt-get install bluez-utils bluez-compat bluez-hcidump libusb-dev libbluetooth-dev



sudo apt-get install  bluez-utils blueman bluez-hcidump python-bluez




sudo ./ibeacon 950 e2c56db5dffb48d2b060d0f5a71096e0 111 1 -49