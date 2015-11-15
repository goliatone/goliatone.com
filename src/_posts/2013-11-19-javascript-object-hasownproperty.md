---
title: "Javascript Object Hasownproperty"
date: 2013-11-18
template: "post.hbs"
---

## JavaScript: Object.hasOwnProperty

A coworker asked me today about JavaScript Object's hasOwnProperty method, and how do I use it.

I figured I would just

```javascript
var config = {age:23, first:'Pepe', last:'Rone', cruft:true};

var User = function(){};

User.prototype.configure = function(c){
    //This are the only attributes that will be initialized
    //by the config object.
    this.age = null;
    this.first = null;
    this.last = null;
    for(var prop in c)   {
        if(this.hasOwnProperty(prop)){
            this[prop] = c[prop];
        }
    }
};

User.prototype.extend = function(c){
    for(var prop in c) this[prop] = c[prop];
};

User.prototype.getName = function(){
    return this.first + ' ' + this.last;
};

User.prototype.hasCruft = function(){
    return 'cruft' in this;
};

var pepe = new User();
pepe.configure(config);
console.log(pepe.getName()); // 'Pepe Rone'
console.log(pepe.hasCruft()) // false
pepe.extend(config);
console.log(pepe.getName()); // 'Pepe Rone'
console.log(pepe.hasCruft()) // true
```