---
title: "Git Fails After Upgrading Mac Os"
date: 2015-09-23
template: "post.hbs"
---


After upgrading Mac OS `git` would fail with the following error:

```
$ git pull

Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.
```


```
$ sudo xcodebuild -license
```
