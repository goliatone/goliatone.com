---
title: "Grunt Cli Error"
date: 2014-02-12
template: "post.hbs"
---

## Grunt:

How to get rid of the grunt warning:
>Local Npm module "grunt-cli" not found. Is it installed?

I solved that annoying error message by moving grunt-cli from the devDependencies to [peerDependencies][1].

```json
{
  "name": "hello-world",
  "version": "0.0.0",
  "author": "goliatone",
  "dependencies": {},
  "peerDependencies": {
    "grunt-cli": "~0.1.9"
  },
  "devDependencies": {
    "glob":"~3.2.8",
    "karma": "~0.10.8",
    "grunt": "~0.4.2"
  }
}
```

[1]: (http://blog.nodejs.org/2013/02/07/peer-dependencies)