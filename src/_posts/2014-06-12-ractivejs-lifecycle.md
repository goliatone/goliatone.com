---
title: "Ractivejs Lifecycle"
date: 2014-06-11
template: "post.hbs"
---

## Ractive: Life cycle 

Ractive 0.4.0:

```javascript
var Component = Ractive.extend({
    /**
     * Called before any setup occurs. You 
     * get a chance to transform options.
     * @param  {Object} options Options object.
     */
    beforeInit:function(options){
    },
    /**
     * Called [only] after **initial render** when the 
     * instance is attached to the DOM
     * @param  {Object} options Options object.
     */
    init:function(options){
    },
    /**
     * Called after initial transitions
     * are completed
     */
    complete:function(){
    } 
}); 
```

A `teardown` event will be fired before the component is removed from the `DOM`.

```javascript 
var ractive = new Component({
    init:function(){
        this.on('teardown', function(){});
    }
});

ractive.on('teardown', function(){});