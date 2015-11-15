---
title: "Note to Self Python Unpack Kwargs Into Attributes"
date: 2013-10-7
template: "post.hbs"
---

## Note to self

### Python: Unpack `**kwargs` into properties

I'm lazy. I want to be able to take any named arguments in my constructor call and make properties.

```python
class DynConfig():
    def __init__(self, *args, *kwargs):
        self.__dict__.update(kwargs)

config = DynConfig(name='goliatone', age=32, email='goliatone.com')
print config.name # goliatone
print config.age  # 32
print config.url  # goliatone.com
```

Instead of doing this:

```python
class DynConfig():
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email
```