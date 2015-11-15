---
title: "Note to Self Terminal Batch Rename"
date: 2014-04-10
template: "post.hbs"
---

## MacOS X: Terminal, batch rename files:

Simple onliner to batch rename files by extension.

```terminal
for file in *.txt; do mv "$file" "`basename $file .txt`.md"; done
```


Or using `sed`:

```terminal
ls *.txt | sed -e 's/\(....\)\(..\)\(..\)\(..\)/mv \1\2\3\4.txt \4\3\2\1/' | sh
```

On OSX you may encounter sed: 1: "...": invalid command code. 
It seems that -i option expects a file extension. You can pass an empty string as the extension.