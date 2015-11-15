---
title: "Javascript Dynamically Create Arrays"
date: 2014-08-20
template: "post.hbs"
---

## Dynamically create Arrays to iterate

var a = new Array(10);
a[0] // returns undefined
a.length // returns 10, because of reasons.

The following example will NOT put anything to the console, because creating an array with length initialization will create an empty array (new Array(5) is equal to [,,,,,]).

```javascript
var repeat = function(times) {
    return Array.apply(null, new Array(times));
};
```


http://www.2ality.com/2013/07/array-iteration-holes.html