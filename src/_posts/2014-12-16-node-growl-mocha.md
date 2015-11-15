---
title: "Node Growl Mocha"
date: 2014-12-15
template: "post.hbs"
---

# Run growl with mocha tests, MacOS
`mocha` is a great testing framework.
It has a flag to use [growl][growl] notifications. The command to run using the **watch** feature and **growl**:

```terminal
$ mocha --growl --watch
```

This way you are supposed to be able to run the tests on the background and get notifications through growl.

It took me a second to realize that in order to actually get the notifications you have to install a separate [node-growl][node-growl] module from `npm`.

There is also a dependency on a gem `terminal-notifier`:
```terminal
$ sudo gem install terminal-notifier
```



[growl]: http://growl.info/downloads#growlnotify
[node-growl]: https://github.com/tj/node-growl