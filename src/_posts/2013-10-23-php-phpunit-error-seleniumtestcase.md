---
title: "Php Phpunit Error Seleniumtestcase"
date: 2013-10-22
template: "post.hbs"
---

## PHPUnit Error: SeleniumTestCase

From time to time I keep seeing this error when I try to run PHPUnit. I always seem to be able to fix it, and forget abut it.
So, **note to self**:

If you can't run PHPUnit, and you get error/warnings that look like the following, the solution is to modify your `php.ini` config file.

```
include_path = ".:/opt/local/lib/php"
```

>Warning: require_once(PHPUnit/Extensions/SeleniumTestCase.php): failed to open stream: No such file or directory in /Users/emilianoburgos/Development/CG/CG-TTDET/Platform/product/yii/framework/test/CWebTestCase.php on line 12

>Fatal error: require_once(): Failed opening required 'PHPUnit/Extensions/SeleniumTestCase.php' (include_path='.:') in /Users/emilianoburgos/Development/CG/CG-TTDET/Platform/product/yii/framework/test/CWebTestCase.php on line 12




