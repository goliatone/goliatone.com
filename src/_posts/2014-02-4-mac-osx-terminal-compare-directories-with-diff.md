---
title: "Mac Osx Terminal Compare Directories with Diff"
date: 2014-02-4
template: "post.hbs"
---

## Use diff to compare directories

We can use `diff` to compare two directories in terminal.

```terminal
diff [dir_1] [dir_2]
```

To make it recursive, use the `-r` option:

```terminal
diff -r [dir_1] [dir_2]
```

To get less verbose output, use `-q` option:

```terminal
diff -rq [dir_1] [dir_2]
```

I also find it useful to pipe the output to a text file:

```terminal
diff -rq [dir_1] [dir_2] > ~/Desktop/diff_output.txt
```