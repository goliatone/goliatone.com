---
title: "Nodemcu Optimizations"
date: 2015-10-17
template: "post.hbs"
---



>Not enough memory

https://github.com/nodemcu/nodemcu-firmware/issues/457

I could explain how to do this but I am not minded to on an issue list about bugs in the firmware. However in short, have you played with lua -i on your dev PC? you type in Lua code and each chunk once syntactically complete is executed by the Lua RTS. The nodeMCU firmware handles callback events just the same way. It has to do this because this is an architectural constraint that the ESP SDK imposes. Lua garbage collects any dead variables and code chunks between these event executions and the only context passed one one event to the next is through globals and upvalues hidden in the Lua registry. So my recommendation is:

Avoid upvalues for context passed between event callbacks, as its very difficulat to get a handle on memory leaks created by these. Only use globals for this usecase.
Nil globals once they are no longer needed so that they can be properly GCed.
Allocate resources and create closures on a just-in-time basis.
The cost of require or dofile is relatively small, so break your program into overlays one per event and use a small stub function as a callback to load each.
If you structure your Lua this way then you will find that you can run surprisingly large Lua applications within the ESP8266 memory constraints.
