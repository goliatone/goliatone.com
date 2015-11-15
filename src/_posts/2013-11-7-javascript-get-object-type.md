---
title: "Javascript Get Object Type"
date: 2013-11-7
template: "post.hbs"
---



>Object.prototype.toString( )
>When the toString method is called, the following steps are taken:
>1. Get the [[Class]] property of this object.
>2. Compute a string value by concatenating the three strings “[object ", Result (1), and "]“.
>3. Return Result (2)


So, with that out of the way, the best option we have to get an object's type is something like the following:

```javascript
var getType = function(obj){
    return ({}.toString.call(obj)).replace('[Object ','').replace(']','');
    //.match(/^\[object\s(.*)\]$/)[1]
};
```

Is a solid, cross browser- implementation and **cross frame** safe.
