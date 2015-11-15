---
title: "Raspberry Pi Autoconnect to Wifi"
date: 2015-04-10
template: "post.hbs"
---


wpa-roam does this exactly.

```
goliatone@raspberrypi ~ $ sudo cat /etc/network/interfaces
auto lo

iface lo inet loopback
iface eth0 inet dhcp

allow-hotplug wlan0
iface wlan0 inet manual
wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp


goliatone@raspberrypi ~ $ sudo cat /etc/wpa_supplicant/wpa_supplicant.conf 
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
   ssid="2WIRE106"
   key_mgmt=NONE
   auth_alg=OPEN
   wep_key0=xxxxxxxxxx
}
```

https://www.raspberrypi.org/forums/viewtopic.php?t=11517
http://weworkweplay.com/play/automatically-connect-a-raspberry-pi-to-a-wifi-network/
