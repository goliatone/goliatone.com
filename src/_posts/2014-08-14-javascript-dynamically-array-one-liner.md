---
title: "Javascript Dynamically Array One Liner"
date: 2014-08-13
template: "post.hbs"
---

## JavaScript: Dynamically create and populate array in one line

```javascript
var data = {
    votes: [1, 2, 3, 4, 5, 6, 7, 8]
};
```

```javascript
var data = {},
    total = 8;
data.votes = Array.apply(null, {
    length: total
}).map(Number.call, Number);
```