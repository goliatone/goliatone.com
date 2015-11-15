---
title: "Git Extending with Custom Commands"
date: 2013-09-16
template: "post.hbs"
---

## Extending git with custom commands.

[Aliases][], would be one way to extend git. You can do things like:

```terminal
git ci -m message file1
```

To define the alias, you can do it from the terminal:

```terminal
git config --global alias.ci commit
```

Which would create the following entry in your `.gitconfig` file

```bash
[alias]
        ci = commit
```


### Show git alias

As an example, we can create an alias to list all aliases. Simple, from terminal we could do:

```terminal
git config --global alias.alias "config --get-regexp 'alias.*'"
```

Then, we have access to the following command from terminal:

```terminal
git alias
```



Another way would be to add a new command all together.

```terminal
git binary init
git binary update
```



[Aliases]: (https://git.wiki.kernel.org/index.php/Aliases#Aliases)

READ:
https://coderwall.com/p/bt93ia


TODO: Break it down into two different posts, aliases and extensions.
TODO: Make python implementation of `git alias`