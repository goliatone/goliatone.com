---
title: "Pro Tip Alternative Assignment"
date: 2014-01-9
template: "post.hbs"
---

### PHP Alternative assignment
In JavaScript you can use the following sintax:

```javascript
var foo = this.bar || 'default';
```


In **PHP 5.3** the equivalent syntax would be a imaginative use of the ternary operator.

```php
$foo = $bar ?: 'default';
```

If you want to use the logical _or_ operator, `||` you would have to take a roundabout.

```php
$foo || $foo = 'default';
```
