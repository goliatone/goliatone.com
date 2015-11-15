---
title: "Karma Travis Debug Warnings"
date: 2014-03-15
template: "post.hbs"
---

## Karma, dependency hell.

I have a few projects running continuous integration with [travis-ci][1]
After updating one of my projects to a newer version of karma, the builds in travis stopped working. Tests were running ok locally, but on CI I would get errors like these:

```terminal
Running "karma:ci" (karma) task
Warning: No provider for "framework:jasmine"! (Resolving: framework:jasmine) Use --force to continue.
Aborted due to warnings.
npm ERR! weird error 3
npm ERR! not ok code 0
```


>Warning: Task "karma:ci" failed. Use --force to continue.

To say the least, that warning message is rather unhelpful. That is the console output I was getting running [PhantomJS][2].

One way to get more information is to run the tests on a real browser and with `singleRun` set to `false`.
Once you run the tests, karma will launch a browser window. If in your configuration you set it to false, now the browser will stay open and will show you a nice Debug button. When you click on it, a new tab will be opened by the browser and you can then run your favorite browser add-in to see the console. Here the copy paste from my Chrome developer tools.

Once in the console, I was able to see that I was getting tons of errors related to a jasmine helper file. Apparently, jasmine 2.0 introduced backward incompatible changes, and the old custom helpers did not work.

>TypeError: Object #<Object> has no method 'addMatchers'

> Replaced custom matchers for ease of use
> 
> The interface for adding custom matchers has been replaced. It has always been possible to add custom matchers, but the API was barely documented and difficult to test. We've changed how matchers are added and tested. Jasmine adds its own matchers by the same mechanism that custom matchers use. Dogfooding FTW.


https://coderwall.com/p/uvllrw



[1]: (http://travis-ci.org)
[2]: (http://phantomjs.org)