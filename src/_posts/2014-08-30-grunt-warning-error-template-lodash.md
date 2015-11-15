---
title: "Grunt Warning Error Template Lodash"
date: 2014-08-29
template: "post.hbs"
---

## Grunt: Error processing template, lodash barks:

After cloning a repo in a new machine, I kept getting this error when running grunt:

>Warning: An error occurred while processing a template (_ is not defined). Use --force to continue.

It was a little bit frustrating, since I had been working perfectly fine at to that point. Also, when things work in grunt all is good, but when it errors out you don't get much information of what is going on.

I was running grunt `0.4.2`. Updating to `0.4.5` fixed the issue. You can see a pull request with the fix [here][1]. 

If you are running a high level task- i.e. `build`- grunt will exit after the error.

```terminal
Running "compass:dist" (compass) task
Warning: An error occurred while processing a template (_ is not defined). Use --force to continue.

Aborted due to warnings.
```

I recommend running that task isolated with some helpful flags:

```terminal 
grunt compass:dist --verbose --stack --debug
```

`grunt` options:

```console
 --debug, -d   Enable debugging mode for tasks that support it.            
     --stack   Print a stack trace when exiting with a warning or fatal    
               error.
--verbose, -v  Verbose mode. A lot more information output.
```


[1]: https://github.com/gruntjs/grunt/pull/1151