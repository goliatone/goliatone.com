---
title: "Ror Autotest Error Windows"
date: 2011-12-11
template: "post.hbs"
---


I get this error when trying to run autotest-standalone- The following stacktrace :

C:/Ruby/lib/ruby/gems/1.8/gems/autotest-standalone-4.5.2/lib/unit_diff.rb:77:in write': Invalid argument (Errno::EINVAL)

Solution, 
replaced putc of lib/autotest.rb @ 284 to 'print'

You will find the file at the path provided by the stacktrace:
C:/Ruby/lib/ruby/gems/1.8/gems/autotest-standalone-4.5.2/lib/autotest.rb