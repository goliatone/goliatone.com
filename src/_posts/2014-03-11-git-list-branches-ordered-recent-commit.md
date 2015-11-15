---
title: "Git List Branches Ordered Recent Commit"
date: 2014-03-10
template: "post.hbs"
---

##Git

Git, list all branches ordered by recent commit:

```terminal
git for-each-ref --sort=-committerdate refs/heads/ --format='- %(refname:short): %(committerdate) %(authorname)'
```