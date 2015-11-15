---
title: "Php Phpunit Windows Setup"
date: 2011-12-27
template: "post.hbs"
---

Error

> windows phpunit could not open input file . pear phpunit2 textui testrunner.php

To install PHP et al under windows, I used xampp. To fix this error, I had to edit `phpunit.bat`* and update the paths to the `php.exe `and to the **PEAR** directory.

Also, If you want to use it  through cygwin (inside Aptana 's cli interface) then you might have to update the `phpunit` file as well, located in the same directory as `phpunit.bat`


*It should be under your php directory at the same level of php.exe. If you used XAMPP to install, it would be something like this:
`C:\DEV\xampp\php\phpunit.bat`

The installed version of phpunit that ships with XAMPP is somehow outdated. The upgrade process can be tricky.
Open a Windows's CMD promt as admin. If you type `pear help` and does not work, you might have to cd to your php root, i.e `cd C:\DEV\xampp\php\`

Now, update channels:
    pear channel-discover pear.phpunit.de
    pear channel-discover components.ez.no
    pear channel-discover pear.symfony-project.com

Next, update pear:
`pear upgrade pear`
If that throws an error similar to:

> ERROR: failed to mkdir C:\php\pear\docs\Archive_Tar\docs
> ERROR: unable to unpack C:\Users\Home539\AppData\Local\Temp\pear\download\Structures_Graph-1.0.4.tgz
> ERROR: failed to mkdir C:\php\pear\docs\PEAR

You might need to mkdir `c:\php` and then `pear upgrade pear` again.

Now, to update *phpunit* 
`pear install --alldeps phpunit/PHPUnit`

If you get an error similar to this:

> Fatal error: Call to undefined method PHP_CodeCoverage_Filter::getInstance()
You might need to check where did the updated PHPUnit package is and make sure your `phpunit.bat` and `phpunit` files point to that directory. Default XAMPP's Pear install seems to have a PHPUnit and a PHPUnit2 directories, point your paths to the updated one.

More info:

-    [StackOverflow Structures_Graph error](http://stackoverflow.com/questions/4717547/cant-install-pear-on-windows-7-structures-graph-error)
-    [Install PHPUnit and PHPDocumentor](http://crlog.info/2011/07/02/installing-xampp-and-adding-orupdating-phpunit-and-phpdocumenter-and-configuring-netbeans-7-to-use-them-on-windows/)
- [Configuring PHPUnit with XAMPP on Windows](http://mailtoirs.blogspot.com/2011/05/configuring-phpunit-with-xampp-in.html)