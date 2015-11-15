---
title: "Git Move Directory from Repo to New Repo with History"
date: 2014-01-18
template: "post.hbs"
---

## Move a directory from a git repository to its own repository, with history

You can use [filter-branch][]

>To rewrite the repository to look as if foodir/ had been its project root, and discard all other history:

```terminal
git filter-branch --subdirectory-filter foodir -- --all
```



[filter-branch]: (http://git-scm.com/docs/git-filter-branch)