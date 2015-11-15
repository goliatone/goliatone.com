---
title: "Javascript Strict Mode"
date: 2013-08-22
template: "post.hbs"
---


////////////////////
Take a look, maybe we can use jsfiddle to embed tests?
http://doc.jsfiddle.net/use/embedding.html
////////////////////

http://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/

I am sure you have seen `"use strict";` before, right? If not, you can always- and _should_- read about at [MDN][], [MSDN][], [Jhon Resig][]

Strict mode, ideally, makes your JS run in a less **WTF** mode, a bit more performant, and [uncertain]future proof. It does so by changing both _syntax_ and _runtime behavior_. Like a <abbr title="dissociative identity disorder">DID</abbr> opt in mode, you get a restricted variant of <del>JavaScript</del><sup>*</sup> ECMAScript, which _intentionally_ has different **semantics** from normal code.

I say _uncertain_ future proof because strict mode introduces changes anticipating future ECMAScript evolution.

Have you pucked yet? No? Well, the previous paragraph should have induced you...

<sup>*</sup>Do not rely on strict mode without feature-testing support. Microsoft added support for strict mode in IE10.


>Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

>Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

>Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.


The restrictions introduced by the directive are:

* Using a variable without declaring it.
* Writing to a read only property.
* Adding a property to an object whose extensible attribute is set to false.
* Deleting a variable, function, or an argument.
* Defining a property more than once in an object literal.
* Using a parameter name more than once in a function.
* Using a future reserved keyword as a variable or function name.
* Assigning an octal value to a numeric literal, or attempting to use an escape on an octal value.
* The value of this is not converted to the global object when it is null or undefined.
* The string "eval" cannot be used as an identifier; var name; function name; parameter name; etc.
* If a variable is declared inside an `eval` function, it cannot be used outside that function.
* You cannot declare a function inside a statement or a block.
* The string "arguments" cannot be used as an identifier; var name; function name; parameter name; etc.
* You cannot change the values of the members of the local arguments object.
* `with` disabled
* `arguments.callee` disabled

----
callee and caller restrictions

----

## Invoking strict mode

Strict mode is applied to a context: whole scripts or functions, not to block elements- enclosed in `{}` braces.
Code in `eval`, `Function`, `setTimeout`, _etc_, are [like] scripts. Meaning those **are affected** by `strict mode` but do not inherit the strictness from the surrounding context.

To invoke it for an entire script, place the directive prologue `'strict mode';` at the top of the context- before any other statements.
To invoke it for a function, make it the first directive prologue.
The context code is a strict code if either its context or any surrounding context contains a Use Strict Directive.
An exception to this rule: an indirect `eval()` allows to create a global variable even if the global code is strict.
Indirect calls to eval evaluate in the global context including this value as a global object and all variable bindings from the global context. For example:

```javascript
//app.js
//Script level strict
'use strict';
(function(){

}());
```

```javascript
function strict(){
	//Function level strictness
	'use strict';
	var nested = function(){};
}
function lax(){};
```

>That being said, you should never use it globally. Using the pragma globally means that **any code within the same file also runs in strict mode**.

>This may not seem like a big deal, however, it can cause big problems in our world of aggressive script concatenation. All it takes is one script to include the pragma globally for every script its concatenated with to be switch into strict mode (potentially revealing errors you never would have anticipated).

If you want strict mode to apply to more than one function, use an immediately-invoked function expression ([IIFE][]):

### Eliminates with
strict mode eliminates the with statement. It is now considered invalid JavaScript syntax and will throw a syntax error when it appears in strict mode code. So first step to using strict mode: make sure you are not using with.

```javascript
// Causes a syntax error in strict mode
with (location) {
    alert(href);
}
```

### Prevents accidental globals
Next, variables must be declared before they can be assigned to. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.

```javascript
// Throws an error in strict mode
(function() {

    someUndeclaredVar = "foo";

}());
```

### Null/undefined coerced to this.
Another important change is a this-value of null or undefined is no longer coerced to the global. Instead, this remains its original value, and so may cause some code depending on the coercion to break. For example:

```javascript
window.color = "red";
function sayColor() {
    alert(this.color);
}

// Throws an error in strict mode, "red" otherwise
sayColor();

// Throws an error in strict mode, "red" otherwise
sayColor.call(null);
```

Basically, the this-value must be assigned a value or else it remains undefined. That means constructors accidentally called without new are also affected:

```javascript
function Person(name) {
    this.name = name;
}

// Error in strict mode
var me = Person("Nicholas");
```

In this code, this is undefined when the Person constructor is called without new. Since you can’t assign a property to undefined, this code throws an error. In non-strict mode, this would be coerced to the global and so name would be assigned as a global variable.


### No duplicates

It can be quite easy to duplicate properties in objects or named arguments in functions if you have been doing a lot of coding. Strict mode throws an error when it comes across either pattern:

```javascript
// Error in strict mode - duplicate arguments
function doSomething(value1, value2, value1) {
    //code
}

// Error in strict mode - duplicate properties
var object = {
    foo: "bar",
    foo: "baz"
};
```

These are both syntax errors and so the error is thrown before the code is executed.


### Safer eval()

Even though eval() wasn’t removed, it has undergone some changes in strict mode. The biggest change is that variables and functions declared inside of an eval() statement are no longer created in the containing scope. For example:

```javascript
(function() {

    eval("var x = 10;");

    // Non-strict mode, alerts 10
    // Strict mode, throws an error because x is undeclared
    alert(x);

}());
```

Any variables or functions created inside of `eval()` stay inside of `eval()`. You can, however, return a value from `eval()` if you wish to pass a value back out:

```javascript
(function() {

    var result = eval("var x = 10, y = 20; x + y");

    // Works in strict and non-strict mode (30)
    alert(result);

    result = eval("'use strict'; var x = 10, y = 20; x + y");
    alert(result);

}());
```



### Errors for immutables

ECMAScript 5 also introduced the ability to modify property attributes, such as setting a property as read only or freezing an entire object’s structure. In non-strict mode, attempting to modify an immutable property fails silently. You have probably run into this issue with some native APIs. Strict mode ensures that an error is thrown whenever you try to modify an object or object property in a way that is not allowed.

```javascript
var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});

// Fails silently in non-strict mode, throws error in strict mode
person.name = "John";
```
In this example, the name property is set to read only. In non-strict mode, assigning to name fails silently; in strict mode, an error is thrown.

Reference links

[Dmitry Soshnikov]: (http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
[ECMAScript 5 compat table]: (http://kangax.github.io/es5-compat-table/)
[JavaScript Errors & Exceptions Handling]: (http://www.tutorialspoint.com/javascript/javascript_error_handling.htm)


[IIFE]: http://goliatone/notes/javascript-iife

[MDN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
[MSDN]: http://msdn.microsoft.com/en-us/library/ie/br230269(v=vs.94).aspx
[Jhon Resig Objects & Properties]: http://ejohn.org/blog/ecmascript-5-objects-and-properties/
[Jhon Resig JSON & more]: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/