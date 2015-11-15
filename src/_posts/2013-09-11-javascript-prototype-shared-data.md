---
title: "Javascript Prototype Shared Data"
date: 2013-09-10
template: "post.hbs"
---

Consider the following:


```javascript
var User = function(data){
    if(data) this.data = data;
};

User.prototype.data = {};
```

This seems to work well.

```javascript
var admin = User({id:1});
console.log(admin.data.id) //1
```

The issue becomes apparent in the following example:


```javascript
var guest = User();
var admin = User({id:1});
console.log(guest.data.id); //1
```
