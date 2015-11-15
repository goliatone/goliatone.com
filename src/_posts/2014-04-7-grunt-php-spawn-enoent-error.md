---
title: "Grunt Php Spawn Enoent Error"
date: 2014-04-7
template: "post.hbs"
---

## Grunt Error: Fatal error: spawn ENOENT

I just switched computers, moving projects slowly to the new one as I've been working on them.
I started working again in a front end project that uses **Grunt** to manage work-flow and the tool-chain. The peculiar thing about this project is that is a theme for a **PHP** framework. Instead of HTML all action happens in **PHP** files.

Using the [gateway][1] **npm** module you can render **PHP** files using php-cgi, and [connect-modrewrite][2] to do basic rewrites as a basic `.htaccess` substitute. Its a really nice work-flow and I have been using it quite extensively.

However, while running a `grunt serve` task I kept getting the following error:

```terminal
...
Running "watch" task
Watching assets/js/{,*/}*.coffee
Watching test/spec/{,*/}*.coffee
Watching app/assets/css/*.{scss,sass}
Watching Gruntfile.js,app/{,*/}*.{html,php,js},app/themes/default/*.php,app/assets/css/*.css,.tmp/assets/css/*.css,{.tmp,app}/assets/js/{,*/}*.js,app/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}
Fatal error: spawn ENOENT
```

As soon as the task had to serve the `index.php` file, the server would crash with a `Fatal error: spawn ENOENT` error, which basically means that is not finding a binary.

I was using the PHP that comes installed with MacOS, which does not install `php-cgi` which I was using to render **PHP** files with the **gateway** module, which enables you to specify **CGI** handlers for requests matching certain extensions:

```javascript
/**
 * PHP gateway, handle template files, yay!!
 */
var gateway = require('gateway');
var phpGateway = function (dir){
    return gateway(require('path').resolve(dir), {
        '.php': 'php-cgi'
    });
};
```

If I ran `php-cgi` in terminal, I would get a `php-cgi command not found` message.

### Installing PHP-CGI with brew
It all came down to installing a new **PHP** version.

```terminal
brew tap josegonzalez/homebrew-php
brew tap homebrew/dupes
brew install --with-cgi php54
```

That was the fix!



[1]: (https://www.npmjs.org/package/gateway)
[2]: (https://www.npmjs.org/package/connect-modrewrite)