---
title: "Setting up Nodejs Arduino Yun"
date: 2015-03-23
template: "post.hbs"
---


The Arduino Yún runs a Linux distribution based on OpenWrt named OpenWrt-Yun.
It actually runs an ATmega32u4 microcontroller and a Atheros AR9331 processor.

To connect via SSH, you need the IP address of the Yún, the admin password. The computer you're using to access the Arduino need to be on the same network.
Also, it's a good idea to have configured the Arduino over WiFi first, for instance so that you can name it and access it by name instead of by IP.

To configure the WiFi go to http://arduino.local and follow the steps detailed [here][confwifi]

Once you have named your Arduino, you can `ssh` into it by using the following command- I named mine *goluino*, you should replace it with whatever name you choose while configuring the WiFi:

```terminal
$ ssh root@goluino.local
```

Before you go any further, you should have expanded your SD. Here, a how-to [expand your yun's disk space][expand] link.

Once you `ssh` into it, just type this commands on terminal:

```
$ opkg update
$ opkg install node
```

## Test

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

Now, if you access your Arduino with the browser at port 8080, you should see a magnificent **Hello World!!** printed on the screen.
Since my device's name is **goluino.local**, I can type the following URL address in the browser http://goluino.local:8080

## Caveats
One issue I've found in both RaspberryPi and Arduino Yún is that `npm` is really slow:

Arduino:
```
root@goluino:~# time npm -v
1.4.28
real    0m 11.10s
user    0m 10.35s
sys 0m 0.32s
```

RaspberryPi:
```
pi@minipi ~ $ time npm -v
1.4.28

real    0m6.119s
user    0m5.840s
sys 0m0.230s
```

Another thing to take into account is that not all modules might run smoothly in either RaspberryPi or Arduino Yún.

>If you are a Node.js fan, you probably want to use your favourite modules. Unfortunately, not every Node.js module is “pure javascript”, so some modules won’t work on the Yún. We are solving this by preparing packages for the most common native Node.js modules.



[confwifi]: http://arduino.cc/en/Guide/ArduinoYun#toc13
[expand]:http://arduino.cc/en/Tutorial/ExpandingYunDiskSpace
