---
title: "Pro Tip Hierarchical Configuration"
date: 2013-12-24
template: "post.hbs"
---

### Configuration strategy

It's nice to have a configuration strategy in place where you can cascade overrides at different levels, where options specified in the lower level are overriden by the ones closer to the user. 

gconfig, *TODO: MAKE PHP CONFIGURATION LIBRARY, PUT EXAMPLE*

In javascript, I use gconfig. In php pconfig. In python the built in module, it's fantastic.

Configuration can tie prety nicely with **DI/IOC** *TODO: Make article about gioc, make php library, and make python library*