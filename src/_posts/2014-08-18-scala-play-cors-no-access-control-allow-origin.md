---
title: "Scala Play Cors No Access Control Allow Origin"
date: 2014-08-17
template: "post.hbs"
---

## Play for Scala: CORS error

Trying to implement a `CORs` filter to handle `GET` and `POST` requests kept failing. The error returned on each `POST`:


> No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3003' is therefore not allowed access. apiservice.js:250
XMLHttpRequest cannot load http://localhost:9000/api/endpoing. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3003' is therefore not allowed access.


After triple checking that the Scala setup was right, I double checked the actual service sending the request. 
Apparently you have to explicitly `JSON.stringify` your `data`, other ways it gets send as a query string, and Play won't be able to parse it correctly. 
