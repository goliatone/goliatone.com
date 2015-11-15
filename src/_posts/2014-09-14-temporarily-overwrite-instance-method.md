---
title: "Temporarily Overwrite Instance Method"
date: 2014-09-13
template: "post.hbs"
---

## Temporarily overwrite instance method


We can overwrite the prototype method with our custom `greet` method.

When we are done, we can delete the instance's method so that the prototype methods get used instead.

```javascript 
var User = function(name){
    this.name = name;
};
User.prototype.greet = function(){
    console.log(this.name);
};

var pepe = new User('Pepe');
pepe.greet(); //Pepe
pepe.greet = function(){console.log(this.name, 'Rone')}.bind(pepe);
pepe.greet(); //Pepe Rone
delete pepe.greet;
pepe.greet(); //Pepe
```