---
title: "Php Echo vs Print"
date: 2014-01-8
template: "post.hbs"
---

## PHP: Difference between echo and print

Going over some **PHP** code I noticed that `echo` and `print` were being used [almost] interchangeably.

### Print takes only one parameter

Another difference is that while `echo` can take multiple parameters, `print` only takes one.

```php
echo "Output is one, ", "two", "three";
print("Single argument");
```

### `echo` does not behave like a function

Whilst both `echo` and `print` are language constructs, `echo` does not behave like a function.
You don't need to use parentheses with either of them, and, most of the time you can use them interchangeably.

```php
$condition = TRUE;
($condition) ? print "true" : print "false";
true
```

```php
$condition = TRUE;
($condition) ? echo "true" : echo "false";
//PHP Parse error:  syntax error, unexpected 'echo' (T_ECHO)
```

To make it work with `echo` we just have to update the statement to:

```php
$condition = TRUE;
echo $condition ? "true" : "true";
//PHP Parse error:  syntax error, unexpected 'echo' (T_ECHO)
```

This might seem a little bit contrieved, but it's only an example. A situation where I like to take advantage of the fact that `print` behaves as a function:

```php
//Usually quick debug fix
myMethod() AND print('myMethod: OK') OR print('myMethod: KO'.generateError());
```

### `echo` is faster

Since `print` does return something is a little bit slower than `echo` but [not worth taking][] into account. Really.


[not worth taking]: (http://fabien.potencier.org/article/8/print-vs-echo-which-one-is-faster)