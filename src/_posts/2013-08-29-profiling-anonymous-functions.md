---
title: "Profiling Anonymous Functions"
date: 2013-08-28
template: "post.hbs"
---

Anonymous functions are not easy to profile because they inherently don't have a name under which they could show up in the profiler. There are two ways to work around this:

```javascript
$('.stuff').each(function() { ... });
```

rewrite to:

```javascript
$('.stuff').each(function workOnStuff() { ... });
```



It is not commonly known that JavaScript supports naming function expressions. Doing this will make them show up perfectly in the profiler.
There is one problem with this solution: **The named expression actually puts the function name into the current lexical scope**. This might clobber other symbols, so be careful.