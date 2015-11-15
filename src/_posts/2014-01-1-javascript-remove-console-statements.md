---
title: "Javascript Remove Console Statements"
date: 2014-01-1
template: "post.hbs"
---

## JavaScript: Remove console statements

There are a few tools to remove [console][] statements on your production code.
[groundskeeper][] or [grunt-remove-logging][] both let you remove `console.*` statements, or specify a patter to match your own logger utility.
Whith groundskeeper you would do:
`groundskeeper -n App.logger.log < dirty.js > clean.js`
There is [grunt-groundskeeper][] task for grunt.

[UglifyJS2][], which can do much more, but if you are already using it you might want to be aware of this flag:

> `drop_console` -- default false. Pass true to discard calls to console.* functions.

If you use a build tool like grunt, you can use the [grunt-contrib-uglify][] task.

If not, just use sed.
`sed -i -e '/^\s*console\.log\(.*\);\s*$/d' code.js`



[UglifyJS2]: (https://github.com/mishoo/UglifyJS2)
[grunt-contrib-uglify]: (https://github.com/gruntjs/grunt-contrib-uglify)
[groundskeeper]: (https://github.com/Couto/groundskeeper)
[grunt-groundskeeper]: (https://github.com/Couto/grunt-groundskeeper)
[grunt-remove-logging]: (https://github.com/ehynds/grunt-remove-logging)
[console]: (https://developers.google.com/chrome-developer-tools/docs/console-api)