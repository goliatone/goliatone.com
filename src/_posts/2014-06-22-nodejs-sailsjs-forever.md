---
title: "Nodejs Sailsjs Forever"
date: 2014-06-21
template: "post.hbs"
---

## Run sails with forever.

Install `forever`:

```terminal
npm install forever -g
```

Assuming you already have `sails` installed and have created an app, cd to the root directory of your app.

Add a `.foreverignore`, using nano:

```terminal
nano .foreverignore
```

List files to be ignored by `forever` on relaod:


```terminal
**/.tmp/**
**/views/**
```

NOTE: If you installed `sails` globally, you need to make it available into your Sails application

You don't `sails lift`, you use:

```terminal
forever -w start app.js
```

It will run in the background, to see `forever` running apps:

```terminal
forever list
```

To stop the `sails` application:

```terminal
forever stop app.js
```

NOTE: If you have multiple running applications with the same name, you will have to address them by it's `forever` index:

```terminal
forever list
```

```
data:        uid  command             script forever pid   logfile                            uptime      
data:    [0] UAGg /usr/local/bin/node app.js 29221   29243 /Users/goliatone/.forever/UAGg.log 0:0:0:1.653
```

The index is the number between the square brackets.