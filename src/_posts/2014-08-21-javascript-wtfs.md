---
title: "Javascript Wtfs"
date: 2014-08-20
template: "post.hbs"
---

## JavaScript

```javascript
 {} + [] = WTF
```
Where WTF is 0...

```javascript
typeof [] + 10
typeof {} + 10
```


```javascript
2 == [2] //true
2 === [2] //false
```

The equality operator translates to this:
```javascript
2 === Number([2].valueOf().toString())
```