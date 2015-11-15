---
title: "Sails Query by Relations"
date: 2015-10-11
template: "post.hbs"
---


If you need to query a model by properties on a related model:

```js
var payload = req.params.all();

var typeName = payload.typeName,
    id = payload.id;

var query = Device.findOne();
query.where({alias:id});
query.populate('type', {where:{name:typeName}});
query.then(function(device){
    console.log('DEVICE', device)
    res.ok({
        success: device ?  true : false,
        record: device
    });
}).catch(function(err){
    res.sendError(err);
});
```
