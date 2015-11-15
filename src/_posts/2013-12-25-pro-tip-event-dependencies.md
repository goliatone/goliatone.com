---
title: "Pro Tip Event Dependencies"
date: 2013-12-24
template: "post.hbs"
---

### Simple interface to prevent event dependencies

Oftentimes I hear that event introduce dependencies in your code. It's somehow true.
A simple patter I use, have a method that returns system wide event name dependencies, and a hub method to handle all events.

```php
<?php
//subscribesTo
//notifiesOf
public function eventTypes()
{
    return array('render.before', 'render.after', 'route.match');
}

public function onSystemEvent(Event $e)
{
    switch($e->type)
    {
        case 'render.before':
        break;
        case 'render.after':
        break;
        case 'route.match':
        break;
    }
}
```


If you follow some conventions, then you can even get rid of the `switch` statement.

```javascript
function eventTypes(){
    return ['render', 'update', 'change'];
}

function onSystemEvent(event){
    var handler = 'on' + _capitalize(event.type);
    handler.call(this, event);
}

function onRender(event){}
function onUpdate(event){}
function onChange(event){}
```
