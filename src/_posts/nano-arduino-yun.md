---
date: 2015-03-24
title: Nano and Arduino Yún
tags: arduino, arduino-yun, hardware
template: post.hbs
---

Yes, I prefer **nano** over **vi**.

If you try to use **nano** on your Arduino Yún you might get the following error:

>Error opening terminal: xterm-256color.

To get rid of that error, type this command into terminal:

```
$ TERM=xterm-color
```

This change would only last for the current terminal session. Now, to make this changes persist

```
$ echo "TERM=xterm-color" >> .bash_profile
```

As a bonus, if you want you can set **nano** as your default editor:

```
$ echo "EDITOR=nano" >> .bash_profile
```

**NOTE**
I always seem to forget the difference between `.bashrc` and `.bash_profile`.
>In bash, `.bashrc` is only read by a shell that is both interactive and non-login

You can read more about it here: [][shells]


[shells]: http://www.thegeekstuff.com/2008/10/execution-sequence-for-bash_profile-bashrc-bash_login-profile-and-bash_logout/