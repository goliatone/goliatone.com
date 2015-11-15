---
title: "Node Upgrading Socket Io 0 9 1 X"
date: 2014-12-24
template: "post.hbs"
---

## Upgrading socket.io from 0.9 to 1.x

You can follow the [migration docs][[migration-docs]] at [socket.io][socketio]'s website.

Since io.set is gone, in my case, on the server app I had to convert form this:

```javascript
var io = require('socket.io').listen(server);
io.set('log level', 1);
io.set('transports', ['websocket']);
```

to this:

```javascript
var options = { 
    serveClient: true, 
    transports: ['websocket']
};
var io = require('socket.io')(server, options);
```

Logging is now based on debug, so to print only socket.io related logging you need to run the app with the following command from terminal: 

```terminal
DEBUG=socket.io:* node index.js
```

After getting the server migrated, I kept getting the following errors on the client side:

Error:
>http://localhost:3000/socket.io/?EIO=2&transport=polling&t=1401421022966-0 400

I solved that by configuring both client and server with the same transport options:

Server:
```javascript
var io = require('socket.io')(server, {transports: ['websocket']});
```

Client:
```javascript
 var io = io( serverUrl, {transports: ['websocket']});
```


[socketio]: http://socket.io
[migration-docs]: http://socket.io/docs/migrating-from-0-9/