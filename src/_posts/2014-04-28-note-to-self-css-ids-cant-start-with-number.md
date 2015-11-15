---
title: "Note to Self Css Ids Cant Start with Number"
date: 2014-04-27
template: "post.hbs"
---

## Note to self: CSS id's can not start with a number

Using an id that starts with a number break CSS. ID or classes are not allowed to start with a number.

>In CSS2, identifiers (including element names, classes, and IDs in selectors) can contain only the characters [A-Za-z0-9] and ISO 10646 characters 161 and higher, plus the hyphen (-); they cannot start with a hyphen or a digit. They can also contain escaped characters and any ISO 10646 character as a numeric code (see next item). For instance, the identifier “B&W?” may be written as “B\&W\?” or “B\26 W\3F”.

One quick way to get around, is to use an id selector:

```css
#3B-caucus {}       /*THIS WON'T WORK*/
[id='3B-caucus'] {} /*THIS WOULD WORK*/
```
/////
You can start with an unicode character, so you could do something retarded and `#\36 B-caucus`