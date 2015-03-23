---
template: post.hbs
title: "Working effectively with legacy code"
date: 2013-02-01
comments: true
tags: dev, books
---

Today I want to talk about the legacy code. I think all of you know what is it and what kind of problems you can face during work with legacy code.

Do you think that the legacy code is bad? Or good?

<!-- more -->

There are at least two points of view. For *business owners* there is no any problem with legacy code. It was written some time ago and it just works and brings money back. For *developers* like me and you (maybe) there are some problems with this kind of code. We are the ones who is working with it and digging into it to make changes asked by business side.

What *kind of problems* could be *introduced by the legacy code* into developer's live? I think a lot of different kind - high coupling, absence of unit tests, explicit usage of external resources, explicit instantiation of dependencies, static calls, "magic strings", code scattering and tangling, etc. The list is very long and depends on many options.

Any solutions? **Yes!**

Please welcome Michael Feathers [@mfeathers](https://twitter.com/mfeathers) and his book ["Working Effectively with Legacy Code"](http://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052/). <!--img src="/images/MFeathers_weffect_legacy_code.jpg"--> This book describes all available problems you can encounter with legacy code. You will find the description of "legacy code", a lot of problems, their description and solution inside the book. *I really recommend to read this book.*

I had found a lot of useful samples for my working project and had implemented them to make production code little bit cleaner.

Everyone who says that he has legacy code and he doesn't know what to do, how to make any improvements, should refer to this book.





