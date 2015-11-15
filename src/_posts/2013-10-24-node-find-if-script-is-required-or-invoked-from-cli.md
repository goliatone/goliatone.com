---
title: "Node Find if Script Is Required or Invoked from Cli"
date: 2013-10-23
template: "post.hbs"
---

## Note to self

### Node: Find if script is required or invoked from CLI

Analogous to python's `if __name__ == '__main__':` in node you can test if a file is being directly invoked from CLI as follows:

```javascript
//somewhere inside app.js
if (__filename === process.argv[1]){
    console.log('Run from terminal');
}
```

```bash
$ node app.js
> Run from terminal
```