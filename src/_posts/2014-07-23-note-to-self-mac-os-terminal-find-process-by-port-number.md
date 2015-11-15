---
title: "Note to Self Mac Os Terminal Find Process by Port Number"
date: 2014-07-22
template: "post.hbs"
---

## Find process listening to an specific port number (Mac)

>This has happens often enough to be a problem but not often enough for me to remember the command.

If you need to find the process listening to an specific port number, and then kill it, you can:

Find:

```console
lsof -i :8000
```

Kill:

```console
kill -9 <PID>
```


