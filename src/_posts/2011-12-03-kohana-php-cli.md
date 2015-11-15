---
title: "Kohana: php CLI"
date: 2011-12-03
---


In windows, you need to set up your environment variables to execute php conformable from your command line.
You can follow the instructions provided by the PHP [manual](http://php.net/manual/en/install.windows.commandline.php), which is pretty clear. One thing to remember is that your PATH variable needs to point to where the `php.exe` file is found and not to the `php.exe` itself.

If you are using Aptana, now you can execute your commands from the provided bash shell straight on your ide.

So, in a clean kohana install you can try to execute from your application's root directory:
`php index.php --uri=welcome`

If you get an `ErrorException` that says `Undefined index: SERVER_NAME ~ SYSPATH\classes\kohana\url.php` that is because the class relies on `$_SERVER['SERVER_NAME']` which is not set in CLI mode. The fix is to initialize kohana with the full base_url:

    Kohana::init(array(	
    	'base_url'   => 'http://localhost/kohana/'
    ...

If you now execute `php index.php --uri=welcome` it should output the controllers response body: `'hello, world!'`

There at two helpful modules to deal with [CLI in Kohana](http://kohanaframework.org/3.0/guide/api/CLI):

*    [kohana-cli](https://github.com/OpenBuildings/kohana-cli) help post can be found [here](http://ivank.github.com/blog/2011/11/command-line-interfaces-rule/)
*    [kohana-cli-reloaded](https://github.com/sebicas/kohana-cli-reloaded)

If you check the Kohana Request class, you can see that it handles CLI and that it takes the following options:

*    uri
*    method
*    get
*    post
*    referrer
