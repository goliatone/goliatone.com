---
title: "Raspberrypi Installing Node"
date: 2015-03-22
template: "post.hbs"
---


To install **node** in the raspberry pi, you can use the `deb` packages distributed by the [node-arm][narm] app, which is an open source express app hosted on heroku. Source code [available][sc] on github.

At the time of writing this, there were four build available:
- node_0.10.35-1_armhf.deb
- node_0.10.36-1_armhf.deb
- node_0.11.16-1_armhf.deb
- node_0.12.0-1_armhf.deb

I will go with the latest stable release: 

```bash
$ wget http://node-arm.herokuapp.com/node_0.10.36-1_armhf.deb
```

```bash
$ sudo dpkg -i node_0.10.36-1_armhf.deb
```

**NOTE**: 
You can access the latest release available from this url:
>http://node-arm.herokuapp.com/node_latest_armhf.deb

Also if you need to remove an old version of node that you installed using `apt-get`:

```
$ sudo apt-get --purge remove nodejs
```

To test this out:

```js
var http = require('http');

// Simple HTTP server handling index route with a hello world!
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!!");
});

// Listen on port 8000
server.listen(8080);

console.log("Server running at http://127.0.0.1:8080");
```

Now, if you issue the `ifconfig` command, you can get your raspberry pi IP on the network- assuming it is connected to your LAN:
```
$ ifconfig
```

Which should give you a bunch of the following. The field you are looking for is the **inet addr**: 
```
eth0      Link encap:Ethernet  HWaddr b8:27:eb:81:56:02  
          inet addr:192.168.1.132  Bcast:192.168.1.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:14968 errors:0 dropped:1 overruns:0 frame:0
          TX packets:9838 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:16426937 (15.6 MiB)  TX bytes:996586 (973.2 KiB)
```

In my case the IP is **192.168.1.132**, so from browser in my computer I can access the raspberry pi server typing this address http://192.168.1.132:8080


**NOTE**:
If you want to use native extensions then you should install [gyp][ngyp]:

```
$ npm install -g node-gyp
```

If the install fails because of not running the command as root, you can try to follow this instructions [here][node-sudo].

```
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP /usr/local/lib/node_modules
sudo chown -R $USER /usr/local
```

[node-sudo]: /2015/02/58/raspberrypi-sudo-node-command-not-found
[narm]:http://node-arm.herokuapp.com/
[sc]: https://github.com/nathanjohnson320/node_arm
[ngyp]: https://github.com/TooTallNate/node-gyp