---
title: "Nano Error Opening Terminal Xterm256color"
date: 2015-06-12
template: "post.hbs"
---

If you like to use nano and get this error:
>Error opening terminal: xterm-256color unknown terminal type


Here is a quick fix:
```
$ TERM="xterm"; export TERM
```

```
$ nano ~/.profile
```

Once you are in `nano` just type the commands again, exit and save.
Thats it. 