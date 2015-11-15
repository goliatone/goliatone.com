---
title: "Note to Self Django Jquery Namespace"
date: 2013-12-9
template: "post.hbs"
---

## Note to self

### Django: undefined jQuery
Django loads `jQuery` as a dependency and stores it under the `django` namespace.
To access the `jQuery` loaded by django you would use `django.jQuery`.

Using a module pattern to define a module that has `jQuery` as a dependency:

```javascript
(function($){
    // Module…
})(django.jQuery);
```

