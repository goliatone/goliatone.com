---
title: "Mac Osx Find Files by Size"
date: 2014-04-15
template: "post.hbs"
---

# Mac: How to find files by size in terminal



```terminal
find . -type f -size -14339c 
```


Piped with other commands:
```
find . -type f -size -14339c | sed -e 's/\.\///g' -e 's/\.jpg//g' > jpgs_ids.txt
```


```
find *.jpg -type f -size -14339c | sed -e 's/\.jpg//g' > jpgs_ids.txt
```


### File size
To see the size of files:
```terminal
ls -la
```


### Size switch
```
-size n[cwbkMG]

    File uses n units of space. The following suffixes can be used:

    `b'    for 512-byte blocks (this is the default if no suffix  is
                                used)

    `c'    for bytes

    `w'    for two-byte words

    `k'    for Kilobytes       (units of 1024 bytes)

    `M'    for Megabytes    (units of 1048576 bytes)

    `G'    for Gigabytes (units of 1073741824 bytes)

    The size does not count indirect blocks, but it does count
    blocks in sparse files that are not actually allocated. Bear in
    mind that the `%k' and `%b' format specifiers of -printf handle
    sparse files differently. The `b' suffix always denotes
    512-byte blocks and never 1 Kilobyte blocks, which is different
    to the behaviour of -ls.
```