---
title: "Nodemcu Button Mqtt Example"
date: 2015-09-9
template: "post.hbs"
---


```
brew install mosquitto
```

```
mosquitto -c /usr/local/etc/mosquitto/mosquitto.conf
```

```
mosquitto_sub -h localhost -v -t "#"
```

```
mosquitto_pub -t /things/sensor/thing-15847686/cmd/off -m "{id:23}"
```

```lua
buttonPin = 4 -- this is ESP-01 pin GPIO02
gpio.mode(buttonPin,gpio.INT,gpio.PULLUP)

function debounce (func)
    local last = 0
    local delay = 200000

    return function (...)
        local now = tmr.now()
        if now - last < delay then return end

        last = now
        return func(...)
    end
end

function onChange()
    if gpio.read(buttonPin) == 0 then
        print("That was easy! ")
        dofile("ifttt.lua")
        tmr.delay(500000)
    end
end

gpio.trig(buttonPin,"down", debounce(onChange))
```
