---
title: "Mac Os Node Not a Directory Error"
date: 2015-09-29
template: "post.hbs"
---


>env: node\r: Not a directory

> npm install -g slack-cli
> slackcli
env: node\r: No such file or directory
The fix looks like

> brew install dos2unix
> find /usr/local/lib/node_modules/slack-cli -name "*.js" | xargs sudo dos2unix
> slackcli --help
