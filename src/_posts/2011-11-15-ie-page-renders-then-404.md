---
title: "IE: Page renders, then 404"
date: 2011-11-15
---

The issue: 

**Page loads in IE but after it's completely rendered, it goes 404.**

This is exactly what was happening recently to this site. It was working as expected locally but once deployed to Heroku, every page went 404 on IE.

It turns out that the culprit was an [htc](http://msdn.microsoft.com/en-us/library/ms531079.aspx) behavior for IE browsers  to render rounded corners...simply removing the offending line in the css made the trick.

Once more, IE, what the heck?! 

