---
title: "Download Contents of Url Recursively"
date: 2013-08-30
template: "post.hbs"
---

## Self note

More than once, I had the need to do a massive download of files from a URL.

Quick `wget` command, options are pretty self explanatory:

```bash
wget -m --no-prent --reject "index.htm*" http://example.com/directory
```