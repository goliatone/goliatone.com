---
title: "Nodejs Express Multiple View Engines"
date: 2013-09-28
template: "post.hbs"
---

## Node.js: Multiple templating engines simultaneously in express.

I will start by saying that I am not a big fan of [haml][] or [jade][]. While I understand why some developers might and do enjoy them I prefer something more [_moustachesque_][]

In the case you want to use more than one templating engine on your [express][] app, here is the simple setup.

You can use [consolidate.js][] to reconcile various engines.

Also, handlebars does not support layouts. I found [express3-handlebars][] to fix that.

```javascript
var express = require('express')
  , cons = require('consolidate')
  , exphbs  = require('express3-handlebars')
  , app = express()
  , hbs = exphbs.create({defaultLayout: 'main.html'});

app.set('views', __dirname + '/views');

// assign the swig engine to .html files
app.engine('jade', cons.jade);
app.engine('haml', cons.haml);
app.engine('html', hbs.engine);

// set .html as the default extension
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index', {
    title: 'Consolidate.js: HTML Handlebars'
  });
});

//Note: you need to explicitly use the extension
//to use a different render engine.
app.get('/jade', function(req, res){
  res.render('index.jade', {
    title: 'Consolidate.js: Jade'
  });
});

app.get('/haml', function(req, res){
  res.render('index.haml', {
    title: 'Consolidate.js: Haml'
  });
});

app.listen(3000);
console.log('Express server listening on port 3000');
```



[haml]: (http://haml.info/)
[jade]: (http://jade-lang.com/)
[_moustachesque_]: (http://mustache.github.io/)
[exoress]: (http://expressjs.com/)
[consolidate.js]: (https://github.com/visionmedia/consolidate.js/)
[express3-handlebars]: (https://npmjs.org/package/express3-handlebars)