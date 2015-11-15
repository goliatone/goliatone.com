---
title: "Nano Set Tab to Spaces 4"
date: 2013-08-30
template: "post.hbs"
---

## Note to self

I use nano to do quick edits or test out ideas in a dirty and quick script. If you use python, it's a good idea to have proper indentaion. Nano has a default tab size of 8.

Edit `~/.nanorc`:

```bash
set tabsize 4
set tabstospaces
```

If you have a file and want to conver tabs to spaces, quick one liner:

```bash
expand -4 tabbed.py > spaced.py
```

Now, if you want to work with a different tab size- lets say you want to edit a two space JS file, but don't want to change the default:

```bash
nano -T 2 Gruntfile.js
```