---
title: "Python Get vs Getattr vs Getattribute"
date: 2013-10-7
template: "post.hbs"
---

### Python: __get__ vs __getattr__ vs __getattribute__

`__getattr__` is [only] invoked if the attribute is not defined in the instance and it was not found.

`__getattribute__` is invoked before looking for the attribute in the object instance. It has precedence over `__getattr__`

There is also some difference in the behaviour related to [*old style* classes vs *new style*][stack] [classes][moin].


### Descriptors
Descriptors allow us to intercept an instance's get/set/delete calls.
If we omit the `__get__` or the `__delete__` we will be effectively removing such operation. Note that if you want to make the attribute read only, you should implement `__set__` and just `pass`.

```python
class Descriptor(object):
    def __get__(self, instance, owner):
        return instance._name
    def __set__(self, instance, value):
        instance._name = " ".join([e.capitalize() for e in value.split()])

class Person(object):
    name = Descriptor()
```

### Getters and setters: decorators

We use the `@property` for the getter, and `@<prop>.setter` where prop is the name of the property.

```python
class Person(object):
    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        self._name = " ".join([e.capitalize() for e in name.split()])

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, age):
        self._age = age

```


### Properties
We could also use the [builtin][property] `property` function.

```python
attribute = property(get, set, del, doc)
```

```python
class Person(object):
    def setName(self, name):
        self._name = " ".join([e.capitalize() for e in name.split()])
    def getName(self):
        return self._name
    name = property(getName, setName)

```


[stack]: http://stackoverflow.com/a/54873/125083
[moin]: https://wiki.python.org/moin/NewClassVsClassicClass
[property]: http://docs.python.org/2/library/functions.html#property