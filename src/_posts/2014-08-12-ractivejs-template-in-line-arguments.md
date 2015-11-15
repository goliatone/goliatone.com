---
title: "Ractivejs Template in Line Arguments"
date: 2014-08-11
template: "post.hbs"
---

## Ractive.js: Component keys

Component
passing data to instance using template in-line arguments lower cases the keys.

```html
  <widget message='Click to activate!' inputKey='someValue' />
```

```javascript
var MyWidget = Ractive.extend({
  init: function (options) {
      console.log('message:', options.data.message);
      // inputKey
      console.log('inputKey:', options.data.inputKey); // undefined
     // inputkey all lowercase
      console.log('inputKey:', options.data.inputkey); // someValue
  },
  data: {
    message: 'No message specified, using the default'
  }
});
```




It turns out this is because you're using a `<div>` for the template and not a `<script>` tag: http://jsfiddle.net/tzxesca7/2/. 