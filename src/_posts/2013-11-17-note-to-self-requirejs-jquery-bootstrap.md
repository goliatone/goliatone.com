---
title: "Note to Self Requirejs Jquery Bootstrap"
date: 2013-11-16
template: "post.hbs"
---

## Note to self

### RequireJS, jQuery and Twitter Bootstrap

If you want to use Twitter Bootstrap with `require`, you need to declare `jQuery` as a dependency for `bootstrap`.
The following setup uses the CDN script of both `jQuery` and `bootstrap` and provide a local fall back:

```javascript
require.config({
    paths:{
        'jquery':['//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js', 'libs/jquery/jquery.min'],
        'bootstrap':['//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min.js' ,'libs/bootstrap/bootstrap.min']
    },
    shim:{
        'bootstrap':{
            deps:['jquery']
        }
    }
})
define(['jquery', 'bootstrap'], function ($) {
    ...
});
```
As a side note, check out [cdnjs][] or [jsdelivr][], both free CDNs where you can add your own libraries.


[cdnjs]: (cdnjs.cloudflare.com)
[jsdelivr]: (http://www.jsdelivr.com/about.php)