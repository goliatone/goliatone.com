---
title: "Mac Terminal Batch Rename Files"
date: 2015-03-7
template: "post.hbs"
---

# Batch rename files from terminal

A one liner to batch change file extensions from terminal. In this example we are graving all files with a **txt** extension in the current directory and updating the files with a **md** extension:

```sh
$ find . -iname "*.txt" -exec bash -c 'mv "$0" "${0%\.txt}.md"' {} \;
```
