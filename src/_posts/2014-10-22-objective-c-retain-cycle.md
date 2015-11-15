---
title: "Objective C Retain Cycle"
date: 2014-10-21
template: "post.hbs"
---

## Objective-C: Retain cycle

>Objects in a hierarchy are created, owned and freed in a chain along the hierarchy. 

In its most simple form, a retain cycle occurs when two objects keep a **strong** reference to each other since both objects do retain each other, making it impossible to `release`.

With `ARC` you avoid retain cycles by declaring one of the items as a **weak** reference. For instance, `delegate` properties should be weak. A **weak** reference means the property can become invalid.

```objective-c
@property (weak, nonatomic) id *delegate;
```
Another thing to consider is _indirect_ references, ie `collections`. `NSArray` will retains it's contents.

From [this][cocoawithlove] great article, we get five rules:
* An object must never retain its parent
* No hierarchical ancestor can be retained
* "Connection" objects should not retain their target
* Use "close" methods to break cycles
* Temporary retains must be temporary







<!-- LINKS -->

[cocoawithlove]: http://www.cocoawithlove.com/2009/07/rules-to-avoid-retain-cycles.html