---
title: "Arduino Yun Node Evacuation Allocation Failed Process out of Memory"
date: 2015-06-13
template: "post.hbs"
---


If you are working with an **Arduino Yún** trying to `npm` install a package and you get the following error:
>Evacuation Allocation failed - process out of memory

You can disable the memory settings for node editing the file `/usr/bin/node`:
```
$ nano /usr/bin/node
```

```
#!/bin/sh

#NODE_PATH=/usr/lib/node_modules /usr/bin/nodejs --stack_size=1024 --max_old_space_size=20 --max_new_space_size=2048 --max_executable_size=5 --gc_global --gc_interval=100 $@
NODE_PATH=/usr/lib/node_modules /usr/bin/nodejs $@
```

However, it might be a better idea to work locally on your computer and then move the files over the Yún. You can use something like Filezilla over SFTP. You need to install a SFTP server.

```
$ opkg update
$ opkg install openssh-sftp-server
```

Also, even better, you might not need or want to use `express`. If you can, try to stick to plain `http` module.
