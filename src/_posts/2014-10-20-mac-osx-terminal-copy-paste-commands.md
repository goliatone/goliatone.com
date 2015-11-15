---
title: "Mac Osx Terminal Copy Paste Commands"
date: 2014-10-19
template: "post.hbs"
---

## Mac OSX: Copy to clipboard terminal command

To copy the contents of a file to the clipboard is pretty straight forward on a Mac terminal:

```terminal
cat file.txt | pbcopy
```


To paste the contents of the clipboard into a file:

```terminal
pbpaste > file.txt
```