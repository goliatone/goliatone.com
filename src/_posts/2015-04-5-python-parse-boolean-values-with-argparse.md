---
title: "Python Parse Boolean Values with Argparse"
date: 2015-04-5
template: "post.hbs"
---


I was writing a small **python** script which was using `argparse` to handle command line arguments.


```bash
command --feature
command --no-feature
```


```python
parser.add_argument('--feature', dest='feature', action='store_true')
parser.add_argument('--no-feature', dest='feature', action='store_false')
parser.set_defaults(feature=True)
```



```python
def str2bool(v):
  #susendberg's function
  return v.lower() in ("yes", "true", "t", "1")
p = argparse.ArgumentParser()
p.register('type','bool',str2bool) # add type keyword to registries
p.add_argument('-b',type='bool')  # do not use 'type=bool'
# p.add_argument('-b',type=str2bool) # works just as well
p.parse_args('-b false'.split())
Namespace(b=False)
```