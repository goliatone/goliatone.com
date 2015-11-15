---
title: "Note to Self Python Glob"
date: 2013-09-27
template: "post.hbs"
---

## Note to self

### Count files in directory

```python
import os, re
files = [name for name in os.listdir('.') if os.path.isfile(name)]
print files
# Get the count
print len([name for name in os.listdir('.') if os.path.isfile(name)])
```

### Count files in directory
```python
import os, re
files = [f for f in os.listdir('.') if re.match(r'image-[0-9]+\.png', f)]

# Get the count
print len([f for f in os.listdir('.') if re.match(r'image-[0-9]+\.png', f)])
```