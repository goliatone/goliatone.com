---
title: "Jquery Check if Selector Null"
date: 2013-11-18
template: "post.hbs"
---

## jQuery: Handy selector null check

In `jQuery`, if you want to check if a selector exists or not you could check the `length` property, or use the `size` method.

```javascript
if($('#nothing').length === 0) console.log('Nothing');
if($('#nothing').size() === 0 ) console.log('Nothing');
if($('#nothing').get(0) === undefined ) console.log('Nothing');
if($('#nothing')[0] === undefined ) console.log('Nothing');
```

However, by extending the `fn` with a simple method we can get some nice flow.

```javascript
$.fn.exists = function(){
    return this.length > 0 ? this : false;
};
```

Then, we can use it like follows:

```javascript
var $el = $('#nothing').exists()   || // false
          $('#something').exists() || // assign value
          $('#neverHere').exists();   // never gets here.
$el.show();
```