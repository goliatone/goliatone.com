---
title: "Sublime Text Execute Php Scripts"
date: 2014-01-3
template: "post.hbs"
---

## How to execute PHP from SBT

If you want to quickly test your PHP scripts from within **Sublime Text** you have to add a build file.
Go to _Tools_ > _Build System_ > _New Build System_
That should bring a new file, you should place the following inside:

```json
{
 "cmd": ["php" , "$file"] 
}
```

In my system, I had to place the absolute path to my current `PHP` version. 
`/opt/local/bin/php` since I have the default `PHP` and one installed with MacPorts.

Now, you can `command ⌘ + b` your script, and see the output in the built in text console.