---
title: "Mac Osx Slow Finder Mavericks Beach Ball Party"
date: 2014-04-12
template: "post.hbs"
---

## Mavericks: Slow Finder
So, I recently bought two new MacPros, both came with Mavericks. Finder has been acting up, being extremely sluggish, and beach balling all the time.

Checking the `console` app, I saw tons of this messages:

>XPC error messaging com.apple.IconServicesAgent: Connection invalid

Fixed it by going to: **Finder > View > Show View Options** and turning off **Show Icon Preview**

Something else that was causing troubles was the fact that a new Finder window shows **All My Files** by default, changed that to a less populated directory.