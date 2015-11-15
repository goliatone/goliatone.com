---
title: "Composer Import Old Libs"
date: 2013-07-29
template: "post.hbs"
---

Let's say that you need to use an old library that is no longer mantained or simply not using composer.

So, composer provides an [autoloader](http://getcomposer.org/doc/04-schema.md#autoload). It handles 3 types of methods, PSR-0, classmap, and files.

In your composer.json file, you can define a package json file inline inside the repositories...

```
"repositories": [
{
    "type": "package",
    "package": {
        "name": "csphere/githubwrapper",
        "version": "0.0.1",
        "autoload": {"classmap": ["githuboauth.class.php"]},
        "source": {
            "url": "git://github.com/csphere/GithubApiWrapper-PHP.git",
            "type": "git",
            "reference": "master"
        }
    }
}]
```


And then, the require:
```
"require": {
	    "csphere/githubwrapper": "0.0.*"
	},
```