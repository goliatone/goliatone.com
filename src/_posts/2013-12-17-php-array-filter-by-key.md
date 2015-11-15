---
title: "Php Array Filter by Key"
date: 2013-12-16
template: "post.hbs"
---

## How to filter arrays in PHP by key



Assuming we have an array with keys we want to retrieve from `$_REQUEST`

```php
$allowed = array('mac', 'name', 'description');
```

What would be the best way to filter `$_REQUEST` based on `$allowed` keys?

The simplest would be to use:

```php
$out = array_intersect_key($_REQEST, array_flip($allowed));
```

### Other implementations

One solution would be to loop through the keys array and save the values of the source array in an output array. Sounds complicated already

```php
$out = array();
foreach($allowed as $key)
{
    if(!array_key_exists($key, $_REQEST)) continue;
    $out[$key] = $_REQUEST[$key];
}
print_r($out) //Array ( [a] => 1 [d] => 4 )
```

If we wanted to use a closure, and one of the array methods, we could try with `array_fiter`:

```php
$out = array();
$filter = function($key) use($_REQUEST, &$out){
    if(array_key_exists($key, $_REQUEST))
        $out[$key] = $_REQUEST[$key];
};
array_walk($allowed, $filter);
print_r($out) //Array ( [a] => 1 [d] => 4 )
```

