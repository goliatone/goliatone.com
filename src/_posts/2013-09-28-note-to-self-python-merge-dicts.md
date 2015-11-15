---
title: "Note to Self Python Merge Dicts"
date: 2013-09-27
template: "post.hbs"
---

## Note to self

###

```pthon
x = {'a':1, 'b': 2}
y = {'b':10, 'c': 11}
z = dict(x.items() + y.items())
print z
{'a': 1, 'c': 11, 'b': 10}
```