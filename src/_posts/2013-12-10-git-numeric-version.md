---
title: "Git Numeric Version"
date: 2013-12-9
template: "post.hbs"
---




```bash
git describe --long --tags --dirty --always
v0.1.0-39-gf7f059f
^       ^ ^
|       | |
|       | SHA of HEAD
|       |
|       number of commits since last tag
|
last tag
```

```bash
git log --pretty=format:"%h|%H|%ad|%s" -1 --date=short
```

```
v0.1.0-39-gf7f059f
f7f059f|f7f059f739a3426bb3509bf454ece02a1924f6e6|2013-12-10|Added travis support.
```