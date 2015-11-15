---
title: "Note to Self Python Remove Duplicated Dicts from List"
date: 2015-02-13
template: "post.hbs"
---

## Python: Remove duplicate dicts from list

You have a `list` of `dict`s and want to remove duplicates. You can use a list comprehension:

```python
data = [{'a': 1}, {'b': 2}, {'a': 1}, {'c':3}]
data = [i for n, i in enumerate(data) if i not in data[n + 1:]]
```

If you open the python `rpl`:

```python
>>> data = [{'a': 1}, {'b': 2}, {'a': 1}, {'c':3}]
>>> [i for n, i in enumerate(data) if i not in data[n + 1:]]
[{'b': 2}, {'a': 1}, {'c': 3}]
```

