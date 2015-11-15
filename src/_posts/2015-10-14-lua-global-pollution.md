---
title: "Lua Global Pollution"
date: 2015-10-13
template: "post.hbs"
---


I've been doing some work with the NodeMCU dev board using Lua, which is a great language. One thing that has been nagging me is that variables and functions are declared in the global namespace by default.

This has been bothering me as I've been coding but I did not run into any issues, until now that is.

In my normal cycle of going from prototype to solid code I had the refactoring of a helper function that was being used in two modules in my todo list. The code seemed to be working fine, but then when I wanted to refactor how the module was taking arguments things broke.

The issue was the helper method in question was declared in two modules that where making use of it. Then I modified one to handle an extra parameter, but the order in which the modules were being included meant that the function actually being called was the one in the second module.
