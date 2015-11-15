---
title: "Sublime Command Line"
date: 2013-08-28
template: "post.hbs"
---

## Sublime terminal MacOS

To make Sublime Text available from the command line, just create a **symbolic link** to the app's `subl` command.

```bash
sudo ln -s "/Applications/Sublime Text 3.app/Contents/SharedSupport/bin/subl" /bin/subl
```
