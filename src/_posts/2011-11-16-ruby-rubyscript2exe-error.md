---
title: "Ruby Rubyscript2exe Error"
date: 2011-11-15
template: "post.hbs"
---

http://mentedolulu.blogspot.com/2009/07/bug-rubyscript2exe-rubyscript2exerb621i.html

ruby rubyscript2exe.rb helloworld.rb


rubyscript2exe.rb:621:in `replace': can't modify frozen string (TypeError)
        from rubyscript2exe.rb:621
        from rubyscript2exe.rb:577:in `newlocation'
        from rubyscript2exe.rb:505:in `newlocation'
        from rubyscript2exe.rb:472:in `newlocation'
        from rubyscript2exe.rb:505:in `newlocation'
        from rubyscript2exe.rb:577:in `newlocation'
        from rubyscript2exe.rb:619

Na linha 621 ou pr�ximo, procure por
$0.replace(File.expand_path("./init.rb")) 


Altere para
$_0 = File.expand_path("./init.rb") 
alias $__0 $0 
alias $0 $_0

http://www.erikveen.dds.nl/rubyscript2exe/index.html#6.1.0
http://ocra.rubyforge.org/