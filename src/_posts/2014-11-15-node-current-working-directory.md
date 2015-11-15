---
title: "Node Current Working Directory"
date: 2014-11-14
template: "post.hbs"
---

# Get current working directory from CLI script

To get the directory from which your command tool/script has been called you can use the [cwd][1] method of the global object `process`:

```javascript
console.log('Current directory: ' + process.cwd());
```


[1]: http://nodejs.org/api/process.html#process_process

