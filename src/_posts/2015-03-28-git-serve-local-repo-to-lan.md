---
title: "Git Serve Local Repo to Lan"
date: 2015-03-27
template: "post.hbs"
---


Sometimes you don't want to create a remote repository. Or your remote is down. For whatever reason, you might want to serve a repo over your local network without too much trouble. *Note that is an insecure way of sharing a repo.*

One way of doing this is by using `git` [daemon][gd]. Which is described as:
>A really simple server for Git repositories


With the following command you can create a local server:
```
git daemon --base-path=. --export-all --reuseaddr --informative-errors --verbose
```

You could also create an **alias**:
```
git config --global alias.serve "daemon --verbose --export-all --base-path=.git --reuseaddr --informative-errors --verbose --strict-paths .git/"
```

Resources:
[Taming the git daemon][http://railsware.com/blog/2013/09/19/taming-the-git-daemon-to-quickly-share-git-repository/]
[Gist][https://gist.github.com/datagrok/5080545]

[gd]: http://git-scm.com/docs/git-daemon
