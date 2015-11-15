---
title: "Javascript Check Range"
date: 2014-06-22
template: "post.hbs"
---

## Check number falls in range

```javascript
if ((value - lower) * (value - upper) < 0) console.log('Value is in range');
else console.warn('Value is out of range');
```