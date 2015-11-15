---
title: "Node Get Rid of Npm Sudo"
date: 2014-02-12
template: "post.hbs"
---

#NPM: Requires sudo to install

If `npm` requires you to `sudo` to install, then you should reclaim ownership of `npm`:

```terminal
sudo chown -R `whoami` ~/.npm
```

You also need to reclaim your local library:

```terminal
sudo chown -R `whoami` /usr/local/lib/node_modules
```
