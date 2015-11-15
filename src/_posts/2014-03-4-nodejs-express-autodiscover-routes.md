---
title: "Nodejs Express Autodiscover Routes"
date: 2014-03-4
template: "post.hbs"
---

## Node: Autodiscover routes

In your server.js file:

```javascript
var http = require('http'),
    express = require('express'),
    app = express();

console.log("***************************");
console.log("MockServer: start, listening on port ", port);
console.log("time: ", new Date());

/*
 * Load all routes, we can dynamically add 
 * route handlers inside the routes directory.
 */
require('./routes')(app);

/*
 * Serve all assets in public directory.
 */
app.use(express.static(__dirname + '/public/'));
```


```javascript
/**
 * Routes autodiscovery module.
 */
var fs = require('fs');

module.exports = function(app){
    console.log("Routes: loading...");

    var name;
    fs.readdirSync(__dirname).forEach(function(file){
        if(file === 'index.js') return;
        name = file.substr(0, file.indexOf('.'));
        /*
         * Dynamically include and initialize all route files.
         */
        require('./'+name)(app);
    });
};
```

Then, your route files would look like this:

```javascript
/**
 * Exports API routes.
 * @param  {Object} app Express like object
 */
module.exports = function(app){
    console.log(' - API route handler');
    console.log(' |- pledge');
    
    /**
     * /pledge handler
     * @param  {[type]}   req  [description]
     * @param  {[type]}   res  [description]
     * @param  {Function} next [description]
     * @return {[type]}        [description]
     */
    app.get('/pledge', function(req, res, next) {
        res.json({ success:true,count:0,pledges:[]});
    });
}
```