---
title: "Python Xrange"
date: 2013-08-24
template: "post.hbs"
---



### Python xrange

In python, using the `range` function actually creates a list which it stores in memory. However, using `xrange` just iterates through the numbers.


`range(0,5000)` takes up more memory than `xrange(0,5000)`

Here is a quick example of what I mean:

range.py:

```python
import sys

for i in range(0,int(sys.argv[1])):
        pass

print " "
```

xrange.py:

```python
import sys

for i in xrange(0,int(sys.argv[1])):
        pass

print " "
```


```console
[$] time python range.py 10000000

real    0m1.139s
user    0m0.911s
sys     0m0.228s

[$] time python xrange.py 10000000

real    0m0.506s
user    0m0.502s
sys     0m0.004s
```