---
title: "Raspberry Pi Bonjour"
date: 2015-03-7
template: "post.hbs"
---

## Raspberry pi bonjour

Using `avahi-daemon`:

```
sudo apt-get update
sudo apt-get install libnss-mdns
```

On mac terminal:
```
$ ping -c 4 raspberrypi.local
PING raspberrypi.local (192.168.1.142): 56 data bytes
64 bytes from 192.168.1.142: icmp_seq=0 ttl=64 time=1.623 ms
64 bytes from 192.168.1.142: icmp_seq=1 ttl=64 time=3.655 ms
64 bytes from 192.168.1.142: icmp_seq=2 ttl=64 time=2.707 ms
64 bytes from 192.168.1.142: icmp_seq=3 ttl=64 time=1.710 ms

--- raspberrypi.local ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 1.623/2.424/3.655/0.829 ms
```

```
$ ssh pi@raspberrypi.local
```



## Configuring avahi-daemon

Now wouldn’t it be nice if the Mac showed your Pi under the shared section of the Finder sidebar? For this the Raspberry Pi needs to be advertising itself on the network, Apple’s Zero Configuration protocol for this is called Bonjour. 
Configure Avahi for `bonjour`:

First:
```
$ sudo apt-get install avahi-daemon
```

Make sure it runs at startup:
```
$ sudo update-rc.d avahi-daemon defaults
```

Create a configuration file containing information about the server. Run:

```
$ sudo nano /etc/avahi/services/afpd.service
```
Enter (or copy/paste) the following:

```xml
<?xml version="1.0" standalone='no'?><!--*-nxml-*-->
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
   <name replace-wildcards="yes">%h</name>
   <service>
      <type>_afpovertcp._tcp</type>
      <port>548</port>
   </service>
</service-group> 
```
Press ctrl and x to exit, then press y to to save changes and return after confirming the location.
Restart Avahi: “sudo /etc/init.d/avahi-daemon restart”



http://www.raspberrypi.org/forums/viewtopic.php?f=66&t=18207

http://www.dodgycoder.net/2015/02/setting-up-bonjourzeroconfmdnsnsd.html
http://gettingstartedwithraspberrypi.tumblr.com/post/24400361937/finding-your-vnc-server-using-bonjour