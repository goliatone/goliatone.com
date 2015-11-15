---
title: "Travis Node Karma Build Error"
date: 2014-04-29
template: "post.hbs"
---

## List of karma build erorrs:

One thing that is frustrating, and recurrent engouh; karma build errors on travis.


```terminal
Aborted due to warnings.
npm ERR! Test failed.  See above for more details.
npm ERR! not ok code 0
```

### files not found:

If karma does not find your files, it will fail. For instance, I refactored my app to install bower dependency files from `libs` to `lib` and forgot to update the `.bowerrc` file. Thus, the files were getting installed in one directory and the karma setup was looking for them in the wrong place.

```terminal
DEBUG [launcher]: /usr/local/phantomjs/bin/phantomjs /tmp/karma-37940907/capture.js
WARN [watcher]: Pattern "/home/travis/build/goliatone/gioc/lib/jquery/jquery.js" does not match any file.
WARN [watcher]: Pattern "/home/travis/build/goliatone/gioc/lib/requirejs/require.js" does not match any file.
...
Warning: Task "karma:ci" failed. Use --force to continue.
```