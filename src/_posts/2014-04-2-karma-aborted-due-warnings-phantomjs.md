---
title: "Karma Aborted Due Warnings Phantomjs"
date: 2014-04-2
template: "post.hbs"
---

### Karma: Aborted due warnings unhelpful error

I really enjoy testing with karma. However, there is something that drives me nuts about it: 

```terminal
...
DEBUG [launcher]: Killing PhantomJS
----------------------+-----------+-----------+-----------+-----------+
File                  |   % Stmts |% Branches |   % Funcs |   % Lines |
----------------------+-----------+-----------+-----------+-----------+
   src/               |     34.71 |     18.48 |     27.59 |     38.93 |
      gconfig.js      |      35.2 |     16.67 |     23.81 |     39.09 |
      gconfig.path.js |     33.33 |        25 |      37.5 |     38.46 |
----------------------+-----------+-----------+-----------+-----------+
All files             |     34.71 |     18.48 |     27.59 |     38.93 |
----------------------+-----------+-----------+-----------+-----------+

DEBUG [launcher]: Process PhantomJS exitted with code 1
DEBUG [launcher]: Cleaning temp dir /var/folders/3v/3v7tnjxd40vfdlpbzxr57vzw0000gp/T/karma-39058869
Warning: Task "karma:ci" failed. Use --force to continue.

Aborted due to warnings.
```

>Aborted due to warnings.

Could there be anything more fucking unhelpful?

It took me a while to figure out what was going on. In my case, I was bitted in the ass by the fact that PhantomJS does not implement `.bind`. Olè! You can read [things][1]....

Anyhow, quick fix: add a shim to your test entry point file. Something like this would work:

```javascript
'use strict';
/**
 * PhantomJS does not have a `bind` method :(
 * polyfill'it!
 */
Function.prototype.bind=Function.prototype.bind||function(b){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");}var a=Array.prototype.slice,f=a.call(arguments,1),e=this,c=function(){},d=function(){return e.apply(this instanceof c?this:b||window,f.concat(a.call(arguments)));};c.prototype=this.prototype;d.prototype=new c();return d;};
```

[1]: (https://github.com/ariya/phantomjs/issues/10522)