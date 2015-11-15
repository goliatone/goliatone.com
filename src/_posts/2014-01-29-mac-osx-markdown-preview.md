---
title: "Mac Osx Markdown Preview"
date: 2014-01-28
template: "post.hbs"
---

### Enable Markdown preview in MacOs

One thing that has been annoying me lately is the lack of file preview for Markdown files in MacOs.

There is an open source project, [qlmarkdown][] that brings d to QuickLook,

Get the [binaries here][], the latest release is [1.3][]. Expand the zip archive, and copy `QLMarkdown.qlgenerator` to `~/Library/QuickLook`- which you might have to make.

That's it.

### Nerd alert
If you want to edit some settings, you can control click the `QLMarkdown.qlgenerator` and choose **Show Package Contents**.
Inside `/Contents/Resources` you can modify the `style.css`, modifing the file seems enought to have the changes effective.


[qlmarkdown]: (https://github.com/toland/qlmarkdown/)
[binaries here]: (https://github.com/toland/qlmarkdown/downloads)
[1.3]: (https://github.com/downloads/toland/qlmarkdown/QLMarkdown-1.3.zip)
