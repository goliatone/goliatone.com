---
title: "Websocket Closeevent Reason Length"
date: 2014-07-28
template: "post.hbs"
---

##WebSocket: reason argument

Per the [w3 TR](http://www.w3.org/TR/websockets/#concept-websocket-close-fail):
>If reason is longer than 123 bytes, then throw a SyntaxError exception and abort these steps.

Good to know if you are implementing a WebSocket server.