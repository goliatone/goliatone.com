---
title: "Raspberrypi Installing Ngrok"
date: 2015-03-22
template: "post.hbs"
---


ngrok is an amazing service. This is how is described in their website:

>Introspected tunnels to localhost
"I want to securely expose a local web server to the internet and capture all traffic for detailed inspection and replay."

And that is exactly what it does. But in a really simple way, and providing some useful features such as a request inspector.


You can download it from this link:

```
$ wget "https://api.equinox.io/1/Applications/ap_in5XNS3IRgHZwyTP4Xe83MvgEd/Updates/Asset/ngrok.zip?os=linux&arch=arm&channel=stable"
```

Note that the url is not really wget friendly. I renamed the downloaded file:
```
$ mv ngrok.zip\?os\=linux\&arch\=arm\&channel\=stable ngrok.zip
```

And since it's a binary, you can just take the laziest path and move it to your bin:
```
$ sudo mv ngrok /usr/bin/
```

Then, you need to go to your [dashboard][ds] and get your token and authenticate:
```
$ ngrok authtoken <AUTH_TOKEN>
```

Now, if you have a test server like we did on the previous post, you can run it:
```
$ node server.js
//Server running at http://127.0.0.1:8080
```

And access the server in the raspberry pi from the outside world:
```
$ ngrok http -subdomain=pi-test 8080
```

```
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://pi-test.ngrok.io -> localhost:8080
```

[ds]: https://ngrok.com/dashboard