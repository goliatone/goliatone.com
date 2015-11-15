---
title: "Raspberry Pi Wifi Monitor"
date: 2015-03-6
template: "post.hbs"
---


## Raspberry pi wifi monitor

I was trying to use the raspberry pi to monitor traffic on my LAN using the Wi
Fi dongle that came with the raspberry pi, a realtek- RTL8188CUS. It does not work.

Typing `iwconfig` on terminal:

```terminal
pi@raspberrypi ~ $ iwconfig wlan0
wlan0     unassociated  Nickname:"<WIFI@REALTEK>"
          Mode:Managed  Frequency=2.437 GHz  Access Point: Not-Associated
          Sensitivity:0/0
          Retry:off   RTS thr:off   Fragment thr:off
          Power Management:off
          Link Quality:0  Signal level:0  Noise level:0
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:0   Missed beacon:0
```


Looking around, I found this [Ralink RT5370][rl] chipset that works on monitor mode.


## Install aircrack-ng suite

First we want to install `libssl-dev` or we will have some problems with `aircrack-ng`:


```terminal
$ sudo apt-get -y install libssl-dev
```

Now we can install `aircrack-ng`:

```terminal
wget http://download.aircrack-ng.org/aircrack-ng-1.2-beta1.tar.gz
tar -zxvf aircrack-ng-1.2-beta1.tar.gz
cd aircrack-ng-1.2-beta1
make
sudo make install
```

This will download `aircrack-ng` package from [aircrack-ng.org][ak] site and extract it to a aircrack-ng-1.2-beta1 directory and then install it from there.


Update `airodump`'s OUI  with the following command:

```terminal
$ sudo airodump-ng-oui-update
```

Then you need to install `iw` to get your wifi dongle to monitor mode:

```terminal
$ sudo apt-get -y install iw
```


## airmon-ng
[airmon-ng][ang]


Now, issue the following command:

```terminal
$ sudo airmon-ng start wlan0
```

It should start **wlan0** on monitor mode as **mon0** and we can try `airodump-ng`:

```terminal
$ sudo airodump-ng mon0
```



## arp-scan

```terminal
$ sudo arp-scan -l
```

>Interface: eth0, datalink type: EN10MB (Ethernet)
Starting arp-scan 1.8.1 with 256 hosts (http://www.nta-monitor.com/tools/arp-scan/)
192.168.1.1 48:f8:b3:1b:57:84   (Unknown)
192.168.1.140   b8:e8:17:11:d5:5c   (Unknown)
192.168.1.143   c8:8f:38:19:68:47   (Unknown)
192.168.1.145   78:31:c1:b8:05:12   (Unknown)
192.168.1.146   00:19:9d:68:65:52   VIZIO, Inc.
192.168.1.144   ac:ca:13:39:bb:c2   (Unknown) (DUP: 1)
192.168.1.131   b8:e9:34:5c:0f:c0   (Unknown) (DUP: 1)
192.168.1.138   b8:e9:35:5c:10:36   (Unknown) (DUP: 1)
192.168.1.139   b8:e9:35:29:6b:b0   (Unknown) (DUP: 1)

>11 packets received by filter, 0 packets dropped by kernel
Ending arp-scan 1.8.1: 256 hosts scanned in 3.425 seconds (74.74 hosts/sec). 9 responded




## arpwatch
http://beginlinux.com/blog/2009/06/defend-against-arp-spoofing/
https://tournasdimitrios1.wordpress.com/2011/01/09/how-to-detect-arp-spoofing-under-unix-or-linux/

[ak]: http://aircrack-ng.org
[rl]: http://www.amazon.com/Mytlp-Wireless-802-11-Adapter-Antenna/dp/B00QKHQXVW/ref=sr_1_5?ie=UTF8&qid=1425702668&sr=8-5&keywords=Ralink+RT5370
[ang]: http://www.aircrack-ng.org/doku.php?id=airmon-ng

<!--
http://www.linuxjournal.com/content/real-time-rogue-wireless-access-point-detection-raspberry-pi?page=0,1
http://blog.petrilopia.net/linux/raspberry-pi-install-aircrackng-suite/
-->