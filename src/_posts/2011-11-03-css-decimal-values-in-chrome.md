---
title: "CSS: Decimal values in Chrome"
date: 2011-11-03
---
It seems like Chrome does not render decimals for pixel values. The following works in FF and IE but not in Chrome:
     letter-spacing: -0.5px;

However, the following does work as expected:
     letter-spacing: -1px;

Also, it seems like it wont go any lower than `0.06em`.

