---
title: "Github Redirects Untar Bash"
date: 2013-08-13
template: "post.hbs"
---

## Github redirect, tar, release



```
FLATG_RELEASE=v0.0.0
FLAT_TAR="https://github.com/goliatone/flatg-core/archive/${FLATG_RELEASE}.tar.gz" 
curl -L -O $FLAT_TAR
# github will redirect this link, you end up having name missmatch
TARDIR=$(tar -ztf "${FLATG_RELEASE}.tar.gz" | head -n 1)
tar -zxvf "${FLATG_RELEASE}.tar.gz" -C  flatg
```