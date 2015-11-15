---
title: "Serve Git from Local Computer Ip"
date: 2013-06-25
template: "post.hbs"
---

Serve git from local computer IP


http://stackoverflow.com/questions/15670692/git-equivalent-of-hg-serve

For just browsing files and revisions git instaweb is the right solution.

In addition if you want to set-up an ad-hock git server for sharing work (push/pull) with some colleagues (which hg serve also allows you to do), you can use:

$ git daemon --reuseaddr --base-path=. --export-all --verbose
Your colleagues will use it with something like:

$ git clone git://<ip-address>/.git project