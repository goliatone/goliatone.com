---
title: "Raspberrypi Sudo Node Command Not Found"
date: 2015-02-27
template: "post.hbs"
---


```terminal
$  which node
```

>/opt/node/bin/node


```terminal
$ ls -l `which node`
```

>lrwxrwxrwx 1 pi root 26 Jan 18 01:57 /opt/node -> node-v0.10.28-linux-arm-pi


```terminal
sudo ln -s /usr/local/bin/node /usr/bin/node
sudo ln -s /opt/node/lib/node /usr/lib/node
sudo ln -s /opt/node/bin/npm /usr/bin/npm
sudo ln -s /opt/node/bin/node-gyp /usr/bin/node-gyp
```


```terminal
$  which node
```

>/usr/bin/node



```terminal
$ ls -l `which node`
```


>lrwxrwxrwx 1 root root 18 Mar  1 01:47 /usr/bin/node -> /opt/node/bin/node


<!--
http://ubuntuforums.org/showthread.php?t=1695292
http://stackoverflow.com/questions/4976658/on-ec2-sudo-node-command-not-found-but-node-without-sudo-is-ok
-->