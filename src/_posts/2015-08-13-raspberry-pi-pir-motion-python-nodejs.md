---
title: "Raspberry Pi Pir Motion Python Nodejs"
date: 2015-08-12
template: "post.hbs"
---


Wiring:
GND -> 39
D01 -> GPIO21 #40
V -> 5v #2
picture

`npm i --save johnny-five raspi-io`

```js
var raspi = require('raspi-io');
var five = require("johnny-five");
var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Create a new `motion` hardware instance.
  var motion = new five.Motion('GPIO21');

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    console.log("motionstart");
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    console.log("motionend");
  });
});
```

python:

```python
import RPi.GPIO as GPIO

import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
#GPIO.setup(10, GPIO.OUT)
GPIO.setup(21, GPIO.IN)

while True:
    input_state = GPIO.input(21)
    if input_state == True:
       print "Motion Detected"
       time.sleep(2)
```
