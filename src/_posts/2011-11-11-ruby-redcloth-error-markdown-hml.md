---
title: "Ruby Redcloth Error Markdown Hml"
date: 2011-11-10
template: "post.hbs"
---

windows ruby install textile
How to install RedCloth on Windows?

NEST error => using haml:
Haml::Error at /examples/using-haml
Can't run Textile filter; required file 'redcloth' not found
    file: (__TEMPLATE__)
    location: nil
    line: 39


NESTA error => textile:
no such file to load -- 1.8/redcloth_scan Couldn't load 
...
    file: redcloth.rb
    location: require
    line: 12


Error:
C:/Ruby/lib/ruby/gems/1.8/gems/RedCloth-4.2.8/lib/redcloth.rb:12:in `
require': no such file to load -- 1.8/redcloth_scan (LoadError)
Couldn't load 1.8/redcloth_scan
The $LOAD_PATH was: ...

Solution:
goto=>
cd C:/Ruby/lib/ruby/gems/1.8/gems/RedCloth-4.2.8/lib
create dir =>
mkdir 1.8
copy file into =>
copy redcloth_scan.so 1.9
