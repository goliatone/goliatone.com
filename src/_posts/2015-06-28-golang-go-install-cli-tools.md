---
title: "Golang Go Install Cli Tools"
date: 2015-06-27
template: "post.hbs"
---


TL;DR

If you install a package's binary with `go install` and you can't access the executable command from terminal, make sure that your `go` workspace's `bin` subdirectory is added to the $PATH.

```
$ export PATH=$PATH:$GOPATH/bin
```




