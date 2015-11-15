---
title: "Javascript Contract Development"
date: 2015-11-13
template: "post.hbs"
---


## JavaScript: Desing by contract.

The javascript `console` has a little known method: `assert`.

The idea is that you can place in your development code assertions such as:

Model.prototype.setName = function(name){
    console.assert(name);
    this.name =
};
