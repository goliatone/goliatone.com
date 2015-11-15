---
title: "Php Self Referencing Closures"
date: 2014-01-25
template: "post.hbs"
---

## PHP self referencing closures


In order to make closure recursive calls, we need to pass a reference to self.

```php
$parser = function(&$value) use(&$parser)
{
    $value = is_object($value) ? (array) $value : $value;

    if(is_array($value))
    {
        array_walk($value, $parser);
    }
};
```

If you don't pass `$parser` by **reference**, it will be `null` which is it's value at the time you pass it.
