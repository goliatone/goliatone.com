---
title: "Git Rename Local Branch Update Remote"
date: 2014-10-22
template: "post.hbs"
---

# Rename git branch local and origin

Rename a branch locally, we then delete the old branch, and push the new branch to origin, setting the local one to track remote.

```bash
git branch -m <OLD_BRANCH> <NEW_BRANCH>
git push origin :<OLD_BRANCH>
git push --set-upstream origin <NEW_BRANCH>
```