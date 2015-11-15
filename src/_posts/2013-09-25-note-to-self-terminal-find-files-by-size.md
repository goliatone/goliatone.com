---
title: "Note to Self Terminal Find Files by Size"
date: 2013-09-24
template: "post.hbs"
---

## Note to self

> Find all files that have a size >= 100MB

```terminal
sudo find / -type f -size +100000k -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'
```