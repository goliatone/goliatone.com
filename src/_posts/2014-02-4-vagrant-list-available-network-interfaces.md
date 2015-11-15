---
title: "Vagrant List Available Network Interfaces"
date: 2014-02-4
template: "post.hbs"
---




```terminal
VBoxManage list bridgedifs | grep ^Name 
```

```terminal
Name:            en1: Wi-Fi (AirPort)
Name:            en0: Ethernet
Name:            p2p0
Name:            en2: Bluetooth PAN
```

On boot:

```terminal
[default] Available bridged network interfaces: 
1) en1: Wi-Fi (AirPort) 
2) en0: Ethernet 
3) vmnet1 
4) vmnet8 
What interface should the network bridge to? 1
```