---
title: "Apache Redirect Domain to Localhost Port"
date: 2013-12-26
template: "post.hbs"
---


## Apache: Redirect domain to localhost port

When setting up a local development environment, sometimes you mihgt want to forward a domain to any app running on `localhost:port` a connection. For instance, if you are using Vagrant.

```xml
<VirtualHost *:80> 
  ProxyPreserveHost On
  ProxyRequests Off
  ServerName myapp.lc
  ServerAlias myapp.lc
  ProxyPass / http://localhost:8080[/app/]
  ProxyPassReverse / http://localhost:8080[/app/]
</VirtualHost> 
```