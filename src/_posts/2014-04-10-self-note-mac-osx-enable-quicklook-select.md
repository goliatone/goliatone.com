---
title: "Self Note Mac Osx Enable Quicklook Select"
date: 2014-04-9
template: "post.hbs"
---

## MacOSX: Enable quicklook text selection:

In order to select text from a preview, enable this in terminal:

```terminal
defaults write com.apple.finder QLEnableTextSelection -bool TRUE; killall Finder
```