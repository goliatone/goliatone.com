---
title: "Functional Notes"
date: 2014-09-18
template: "post.hbs"
---


## Purity and Referential transparency
Push side effects to the outer layers of the program. Architect code with a pure core and a thin layer on the outside handling effects.
A pure function is a function without side effects. Referential transparency (RT) is a property of _expressions_ in general, where an expression can be replaced by its result without changing the meaning of the program.