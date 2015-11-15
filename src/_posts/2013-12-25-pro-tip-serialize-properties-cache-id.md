---
title: "Pro Tip Serialize Properties Cache Id"
date: 2013-12-24
template: "post.hbs"
---

## Serialize object properties as key for cache

Simple idea, how to invalidate cache? Simple pattern would be to have the sate 
of the object reflected in its cache id. Serialize its properties and values
as the id.

```
JSON.encode(vo) + timestamp + ".cache"
```