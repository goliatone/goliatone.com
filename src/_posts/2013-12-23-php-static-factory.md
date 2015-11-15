---
title: "Php Static Factory"
date: 2013-12-22
template: "post.hbs"
---

# PHP: Inherited factory method

In PHP, you can use the keyword `static` inside a factory method to get a reference to the current class at runtime- as opposed to `self` that would return the original class in which the method was originally defined.

This is really useful, for instance, if you want to define a factory method in a base class but have it return the class in which the method was invoked.

This is related to a feature introduced in PHP 5.3.0, **late static bindings**, which can be used to reference the called class in a context of static inheritance. For reference, see PHP doc [page][].

Example:


```php
<?php
class Base
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function __toString()
    {
        return "Name is: {$this->name}";
    }

    static public function factory($name)
    {
        return new self($name);
    }
}

class Child extends Base
{
    public function __toString()
    {
        return parent::__toString() . " instance.";
    }
}

echo Base::factory("Base")."\n"; //Name is: Base
echo Child::factory("Child");    //Name is: Child
```

The output shows that in both cases factory returns a instance of the `Base` class. If we use `static` instead, we get the current class.


```php
<?php
class Base
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function __toString()
    {
        return "Name is: {$this->name}";
    }

    static public function factory($name)
    {
        return new static($name);
    }
}

class Child extends Base
{
    public function __toString()
    {
        return parent::__toString() . " instance.";
    }
}

echo Base::factory("Base")."\n"; //Name is: Base
echo Child::factory("Child");    //Name is: Child instance.
```


[page]: (http://www.php.net/manual/en/language.oop5.late-static-bindings.php)