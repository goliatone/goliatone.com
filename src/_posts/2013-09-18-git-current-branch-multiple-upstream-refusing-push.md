---
title: "Git Current Branch Multiple Upstream Refusing Push"
date: 2013-09-17
template: "post.hbs"
---

## Note to self

If you get the following git error

```terminal
$ git push
fatal: The current branch master has multiple upstream branches, refusing to push.
```

Solve it with:

```terminal
git config remote.origin.push HEAD
```