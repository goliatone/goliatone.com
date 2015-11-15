---
title: "Swift Range Operators"
date: 2014-06-11
template: "post.hbs"
---

##Swift: Range operators

Swift includes two range operators, two dots, three dots.

The closed range operator (a...b) defines a range that runs from a to b, and includes the values a and b.

The half-closed range operator (a..b) defines a range that runs from a to b, but does not include b.

Nice! Just like in Ruby. Hold on, heck no. It's flipped around. WTF?!

Ranges may be constructed using the s..e and s...e literals
Ranges constructed using .. run from the beginning to the end inclusively. 
Those created using ... exclude the end value.


https://developer.apple.com/library/prerelease/ios/documentation/swift/conceptual/swift_programming_language/BasicOperators.html#//apple_ref/doc/uid/TP40014097-CH6-XID_85

http://www.ruby-doc.org/core-2.1.2/Range.html