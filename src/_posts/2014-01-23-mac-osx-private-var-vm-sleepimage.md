---
title: "Mac Osx Private Var Vm Sleepimage"
date: 2014-01-22
template: "post.hbs"
---

## Mac OS: Reclaim disk space

So, I've been having issues with my MacPro. It has a new SSD hard drive but from time to time, it will start swapping and claim there is no more disk space left on the computer.

```terminal
df -h
```

```terminal
Filesystem      Size   Used  Avail Capacity  Mounted on
/dev/disk0s2   223Gi  203Gi   20Gi    92%    /
devfs          185Ki  185Ki    0Bi   100%    /dev
map -hosts       0Bi    0Bi    0Bi   100%    /net
map auto_home    0Bi    0Bi    0Bi   100%    /home
```
I started looking for large files:

```terminal
sudo find / -type f -size +100000k -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'
```

The output was similar to:

```terminal
...
/private/var/vm/sleepimage: 16G
/private/var/vm/swapfile10: 1.0G
/private/var/vm/swapfile11: 1.0G
/private/var/vm/swapfile12: 1.0G
/private/var/vm/swapfile13: 1.0G
/private/var/vm/swapfile14: 1.0G
/private/var/vm/swapfile15: 1.0G
/private/var/vm/swapfile16: 1.0G
/private/var/vm/swapfile2: 128M
/private/var/vm/swapfile3: 256M
/private/var/vm/swapfile4: 512M
/private/var/vm/swapfile5: 1.0G
/private/var/vm/swapfile6: 1.0G
/private/var/vm/swapfile7: 1.0G
/private/var/vm/swapfile8: 1.0G
/private/var/vm/swapfile9: 1.0G
...
```

That's a lot of diskspace right there. Apparently `/private/var/vm/sleepimage` is used to store RAM contents during hibernation. So, if you have 16G of RAM, then `/private/var/vm/sleepimage` will take 16G of ram.
The other files seem like cruft left over.
You can delete those files. If hibernate is enabled it will be recreated next time the Mac goes to sleep.

You can disable hibernation in terminal:
```terminal
sudo pmset -a hibernatemode 0
```

And then remove all swapfiles and sleepimage:
```terminal
sudo rm /private/var/vm/sleepimage
sudo rm /private/var/vm/swapfile*
```

Apparently, in Mountain Lion the image might _come back_, so we could create `sleepimage` and claim it so that the system can touch it or recreate it:

```terminal
sudo touch /private/var/vm/sleepimage
chflags schg /private/var/vm/sleepimage
```



From man `pmset`:

>hibernatemode = 0 (binary 0000) by default on supported desktops. The system will not back memory up to persistent storage. The system must wake from the contents of memory; the system will lose context on power loss. This is, historically, plain old sleep.
>
>hibernatemode = 3 (binary 0011) by default on supported portables. The system will store a copy of memory to persistent storage (the disk), and will power memory during sleep. The system will wake from memory, unless a power loss forces it to restore from disk image.
>
>hibernatemode = 25 (binary 0001 1001) is only settable via pmset. The system will store a copy of memory to persistent storage (the disk), and will remove power to memory. The system will restore from disk image. If you want "hibernation" - slower sleeps, slower wakes, and better battery life, you should use this setting.

