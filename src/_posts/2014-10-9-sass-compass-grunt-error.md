---
title: "Sass Compass Grunt Error"
date: 2014-10-9
template: "post.hbs"
---

## Compass Error: require cannot load such file.

Running a compass grunt task that had been working fine, suddenly started failing with the following error:

```bash
Running "compass:server" (compass) task
/Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:128:in `require': cannot load such file -- sass/script/node (LoadError)
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:128:in `rescue in require'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:39:in `require'
from /Library/Ruby/Gems/2.0.0/gems/compass-0.12.2/lib/compass/sass_extensions/monkey_patches/browser_support.rb:1:in `<top (required)>'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:54:in `require'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:54:in `require'
from /Library/Ruby/Gems/2.0.0/gems/compass-0.12.2/lib/compass/sass_extensions/monkey_patches.rb:2:in `block in <top (required)>'
from /Library/Ruby/Gems/2.0.0/gems/compass-0.12.2/lib/compass/sass_extensions/monkey_patches.rb:1:in `each'
from /Library/Ruby/Gems/2.0.0/gems/compass-0.12.2/lib/compass/sass_extensions/monkey_patches.rb:1:in `<top (required)>'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:54:in `require'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:54:in `require'
from /Library/Ruby/Gems/2.0.0/gems/compass-0.12.2/lib/compass/sass_extensions.rb:9:in `<top (required)>'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:54:in `require'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:54:in `require'
from /Library/Ruby/Gems/2.0.0/gems/compass-0.12.2/lib/compass.rb:5:in `block in <top (required)>'
from /Library/Ruby/Gems/2.0.0/gems/compass-0.12.2/lib/compass.rb:4:in `each'
from /Library/Ruby/Gems/2.0.0/gems/compass-0.12.2/lib/compass.rb:4:in `<top (required)>'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:54:in `require'
from /Library/Ruby/Site/2.0.0/rubygems/core_ext/kernel_require.rb:54:in `require'
from /Library/Ruby/Gems/2.0.0/gems/compass-1.0.0.rc.1/bin/compass:20:in `block in <top (required)>'
from /Library/Ruby/Gems/2.0.0/gems/compass-1.0.0.rc.1/bin/compass:8:in `fallback_load_path'
from /Library/Ruby/Gems/2.0.0/gems/compass-1.0.0.rc.1/bin/compass:19:in `<top (required)>'
from /usr/bin/compass:23:in `load'
from /usr/bin/compass:23:in `<main>'
```

It turns out that the main error is due to an incompatible sass and compass versions- I had previously installed CocoaPods and did a `sudo gem update --system`.

To list local gems:

```
$ gem list --local
```

Which brought following output:

```ruby
...
compass (1.0.0.rc.1, 0.12.2)
compass-core (1.0.0.rc.1)
compass-import-once (1.0.5)
...
sass (3.3.14, 3.2.14)
```

Ended up removing the `0.12.2` version:

```bash
$ sudo gem uninstall compass --version 0.12.2
```
