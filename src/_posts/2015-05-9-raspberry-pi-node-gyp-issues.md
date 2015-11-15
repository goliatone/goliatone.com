---
title: "Raspberry Pi Node Gyp Issues"
date: 2015-05-9
template: "post.hbs"
---


```
1428628935374 Device(s) /dev/ttyACM0
1428628935449 Connected /dev/ttyACM0
1428628938796 Repl Initialized
>> servo.center()
Error: Serialport not open.
    at SerialPortFactory.SerialPort.write (/home/pi/CODE/servo/node_modules/johnny-five/node_modules/serialport/serialport.js:254:17)
    at Board.analogWrite (/home/pi/CODE/servo/node_modules/johnny-five/node_modules/firmata/lib/firmata.js:606:11)
    at Board.servoWrite (/home/pi/CODE/servo/node_modules/johnny-five/node_modules/firmata/lib/firmata.js:651:20)
    at Servo.Controllers.Standard.servoWrite.value (/home/pi/CODE/servo/node_modules/johnny-five/lib/servo.js:109:17)
    at Servo.to (/home/pi/CODE/servo/node_modules/johnny-five/lib/servo.js:332:10)
    at Servo.center (/home/pi/CODE/servo/node_modules/johnny-five/lib/servo.js:422:15)
    at repl:1:8
    at REPLServer.self.eval (repl.js:112:21)
    at Interface.<anonymous> (repl.js:239:12)
    at Interface.emit (events.js:95:17)
```

I was having issues with node-gyp. I had to reinstall it

```
sudo apt-get update && sudo apt-get upgrade
```

One thing I noticed while doing the upgrade is that node was also upgraded, I had manually installed `node_0.10.36-1_armhf.deb` and it got upgraded to **v0.12.0**.


```
$ sudo npm i -g node-gyp
```


## Enable the Serial Port in the Raspberry Pi
If you want to use the serial port you first need to release it. By default is used by a login shell that you can connect over a serial cable.

```
$ sudoedit /etc/inittab
```
You need to comment out the last line:

```
# T0:23:respawn:/sbin/getty -L ttyAMA0 115200 vt100
```

```
sudo cp /boot/cmdline.txt /boot/cmdline.txt.back
```

```
dwc_otg.lpm_enable=0 console=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait
```

To:
```
dwc_otg.lpm_enable=0 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait
```


##
I have a servo connected to an Arduino Uno which is connected to a Raspberry Pi 2 B. I was running the sample servo script. It was able to connect, as soon as I would send a command from the rpl it would error out with a Error: Serialport not open..

However, I installed the arduino IDE- sudo apt-get install arduino- and I was able to run a simple sketch from the Raspberry controlling the servo OK.

I was also able to control the pin 13 LED from the rpl with no issues.

The Raspberry Pi was powering the Arduino so I ended up powering it with an external source and that fixed the issue.

johnny-five v 0.8.53
node v0.12.0
node-gyp v1.0.3
serialport v1.6.3

Incidentally I was having issues compiling node-gyp and serialport was not being installed. It took me a bit to fix that and get it running.