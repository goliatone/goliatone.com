---
title: "Javascript Momentjs Deprecation Warning Moment Constructor Fall Back to Js Date"
date: 2015-03-20
template: "post.hbs"
---

## Moment: Deprecation warning: moment constructor fall back to js Date

Working with [moment.js][1] in node I kept getting the following deprecation warning:

>Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.


It took me a bit to figure out exactly what it meant and how to get rid of it. If you check the github issue and you read the full thread you might get to it, but honestly, I was getting that error in one of those situations that nudge you to think that cutting corners is faster. So I did not read it.

Half way through, you can read the following:
>Sorry if I have miss understood something here but I just want to be clear on how isValid() is working.

>Current version moment('2014 05 12').isValid() // true + warning message
Next major version moment('2014 05 12').isValid() // false + no warning message

Basically, if you had a date in this format **2014 05 12** you will get the warning. You need to give it this format instead: **2014-05-12**.

That's all I got.

[1]: http://momentjs.com