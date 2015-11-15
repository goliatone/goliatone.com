---
title: "Localpacketsniffingdebugtraffic"
date: 2013-08-8
template: "post.hbs"
---

## Troubleshooting

You can see the raw values received by pystatsd by packet sniffing:

```
$ sudo ngrep -qd any . udp dst port 8125
```

You can see the raw values dispatched to carbon by packet sniffing:

```
$ sudo ngrep -qd any stats tcp dst port 2003
```