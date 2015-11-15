---
title: "Node Setimmediate vs Process Nexttick"
date: 2015-06-18
template: "post.hbs"
---


The names of this two are counter intuitive since their behavior seems backwards. `setImmediate` is executed **after** `nextTick`.

You might have used before a `setTimeout` with a time of 0 for instance to postpone emitting an event. `setImmediate` and `nextTick` have the same effect but there is a subtle difference.

Both are executed after the current execution context and lack a second argument for time.

The callback for `setImmediate` is queued after I/O callbacks- and has a `cancelImmediate`.

The callback for `process.nextTick` is executed before I/O or timer callbacks and ahead of the event queue.
