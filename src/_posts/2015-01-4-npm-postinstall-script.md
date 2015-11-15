---
title: "Npm Postinstall Script"
date: 2015-01-4
template: "post.hbs"
---

## NPM package.json: postinstall script

A feature I did not know about npm is the ability to run post install [scripts][scripts].

```json
"scripts": {
        "test": "grunt karma:ci",
        "postinstall": "node node_modules/bower/bin/bower install"
    },
```

Here is a list of all the suported script tags:
- prepublish: Run BEFORE the package is published. (Also run on local npm install without any arguments.)
- publish, postpublish: Run AFTER the package is published.
- preinstall: Run BEFORE the package is installed
- install, postinstall: Run AFTER the package is installed.
- preuninstall, uninstall: Run BEFORE the package is uninstalled.
- postuninstall: Run AFTER the package is uninstalled.
- pretest, test, posttest: Run by the npm test command.
- prestop, stop, poststop: Run by the npm stop command.
- prestart, start, poststart: Run by the npm start command.
- prerestart, restart, postrestart: Run by the npm restart command. Note: npm restart will run the stop and start scripts if no restart script is provided.

[scripts]: https://docs.npmjs.com/misc/scripts
