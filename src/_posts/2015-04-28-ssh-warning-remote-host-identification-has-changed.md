---
title: "Ssh Warning Remote Host Identification Has Changed"
date: 2015-04-27
template: "post.hbs"
---


>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
fa:71:5e:f7:5f:4f:72:c6:15:2e:58:f6:8b:4e:b0:96.
Please contact your system administrator.
Add correct host key in /Users/goliatone/.ssh/known_hosts to get rid of this message.
Offending RSA key in /Users/goliatone/.ssh/known_hosts:45
RSA host key for 192.168.1.134 has changed and you have requested strict checking.
Host key verification failed.

```
ssh-keygen -R <host>
```

>If google sent you here, while looking for an answer as to why you suddenly can't access your vagrant box, this answer will help the most. When starting up a new and different vagrant box, that box may generate a new rsa-key that will be different from the previously registered rsa-key for that same local host. If this is this case, you can trust that the change is only a nuisance, and you can remove the old invalid key –

Make sure you know what you are doing!
