---
title: "Python Regex Expand"
date: 2013-09-1
template: "post.hbs"
---



Pythonic. There is definitively some things I love about python.

```python
pattern = "([0-9]+)(\.?)(#?)([\w-])([0-9]?)"
    for duration, dotted, sharp, pitch, octave  in re.findall(pattern, tune_str):
```