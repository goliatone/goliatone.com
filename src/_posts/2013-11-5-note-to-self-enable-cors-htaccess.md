---
title: "Note to Self Enable Cors Htaccess"
date: 2013-11-5
template: "post.hbs"
---

## Note to self

### Enable CORS in htaccess

Ajax crossdoamin issues, or the following error on any ajax request:

>Origin <domain> is not allowed by Access-Control-Allow-Origin

```htaccess
# ENABLE CORS
# with AJAX withCredentials=false (cookies NOT sent)
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "POST, GET, PUT, OPTIONS, PATCH, DELETE"
Header always set Access-Control-Allow-Headers "X-Accept-Charset,X-Accept,Content-Type"
RewriteEngine On
RewriteCond %{REQUEST_METHOD} OPTIONS
RewriteRule ^(.*)$ $1 [R=200,L,E=HTTP_ORIGIN:%{HTTP:ORIGIN}]]
```