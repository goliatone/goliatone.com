---
title: "Macosx Delete All Files Terminal"
date: 2013-09-23
template: "post.hbs"
---

## Note to self

So, I needed to delete all pyc files from a project. Found a quick `find` option that would do just that:

```terminal
find . -name \*.pyc -delete
```

For a second I thought to make an alias but as it turns out, there is a built int tool in Mac that does the same.

```terminal
pyclean
Usage: pyclean [-p PACKAGE] [DIR_OR_FILE]
```

