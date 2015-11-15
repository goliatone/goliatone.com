---
title: "Mac Capture Ip Mac in Lan"
date: 2015-03-6
template: "post.hbs"
---


```terminal
nmap -sP 192.168.0.1/24 -oG archivos/Host_ip.txt
```
```terminal
cat archivos/Host_ip.txt | grep Host | cut -c 7-20 | tr -d "\()" > archivos/Host_ip1.txt
```

```terminal
arp -a | cut -d" " -f1-4 | awk '{print $2 $4}' | tr "()" " " | awk '{print $1,$2 " "}' | tr " " "," | cut -d"," -f1-2 &gt; archivos/datosarp.txt
```


<!--
http://www.fresymetal.com/como-detectar-intrusos-en-tu-wifi-con-raspberry-pi/
-->