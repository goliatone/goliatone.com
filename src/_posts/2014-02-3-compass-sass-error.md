---
title: "Compass Sass Error"
date: 2014-02-3
template: "post.hbs"
---

##

```terminal
.../.rvm/rubies/ruby-1.9.3-p362/lib/ruby/site_ruby/1.9.1/rubygems/core_ext/kernel_require.rb:110:in `require': cannot load such file -- sass/script/node (LoadError)
```

For some reason, compass seems to be pulling a broken version of sass.

```terminal
gem uninstall sass
gem install sass
```