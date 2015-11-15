---
title: "Javascript Tilde Shortcut Indexof Check"
date: 2014-06-17
template: "post.hbs"
---

## Bitwise NOT operator or tilde shortcut:

You can use `Array.prototype.indexOf` to check the position of an item in an array. If an item is found it returns the index of the item, if the item is not found it returns `-1`.

```javascript
if([1,2,3,4,5].indexOf(3) !== -1){
    console.log('We are here');
}
```

The [bitwise NOT operator ][1] will only return `0` for `-1`, thus evaluating as falsy inside an if statement:

```javascript
if(~[1,2,3,4,5].indexOf(3)){
    console.log('We are here');
}
```


[1]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

