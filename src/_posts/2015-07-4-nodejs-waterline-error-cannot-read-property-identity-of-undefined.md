---
title: "Nodejs Waterline Error Cannot Read Property Identity of Undefined"
date: 2015-07-4
template: "post.hbs"
---


While working with [waterline] I kept getting the following error:

>Cannot read property 'identity' of undefined

It took me a bit to figure it out, but it turns out the problem was on the identity definition. After some fiddling around it turned out that the offending model had this definition:
```js
var PackageTransaction = Waterline.Collection.extend({
    identity: 'packageTransaction',
    connection: 'default',
    attributes:{}
});
```

The problem was on **packageTransaction** being camel cased, and apparently **waterline** does not like it.

```js
var PackageTransaction = Waterline.Collection.extend({
    identity: 'packagetransaction',
    connection: 'default',
    attributes:{}
});
```


The full stack trace looks like this:
>/Users/goliatone/Dev/postman/node_modules/waterline/lib/waterline/adapter/sync/strategies/alter.js:41
 = _.find(self.query.waterline.schema, {tableName: self.collection}).identity;
                                                                    ^
TypeError: Cannot read property 'identity' of undefined
    at afterDescribe (/Users/goliatone/Dev/postman/node_modules/waterline/lib/waterline/adapter/sync/strategies/alter.js:41:91)
    at wrapper (/Users/goliatone/Dev/postman/node_modules/waterline/node_modules/lodash/index.js:3602:19)
    at applyInOriginalCtx (/Users/goliatone/Dev/postman/node_modules/waterline/lib/waterline/utils/normalize.js:421:80)
    at wrappedCallback (/Users/goliatone/Dev/postman/node_modules/waterline/lib/waterline/utils/normalize.js:320:18)
    at _normalizeCallback.callback.success (/Users/goliatone/Dev/postman/node_modules/waterline/node_modules/switchback/lib/normalize.js:33:31)
    at _switch (/Users/goliatone/Dev/postman/node_modules/waterline/node_modules/switchback/lib/factory.js:48:28)
    at /Users/goliatone/Dev/postman/node_modules/sails-disk/lib/database.js:262:5
    at Database.getCollection (/Users/goliatone/Dev/postman/node_modules/sails-disk/lib/database.js:141:3)
    at Database.describe (/Users/goliatone/Dev/postman/node_modules/sails-disk/lib/database.js:258:8)
    at Object.module.exports.adapter.describe (/Users/goliatone/Dev/postman/node_modules/sails-disk/lib/adapter.js:72:28)
    at module.exports.describe (/Users/goliatone/Dev/postman/node_modules/waterline/lib/waterline/adapter/ddl/index.js:80:13)
    at module.exports [as migrateAlter] (/Users/goliatone/Dev/postman/node_modules/waterline/lib/waterline/adapter/sync/strategies/alter.js:34:8)
    at Query.sync (/Users/goliatone/Dev/postman/node_modules/waterline/lib/waterline/query/index.js:68:37)
    at /Users/goliatone/Dev/postman/node_modules/waterline/lib/waterline.js:288:16
    at /Users/goliatone/Dev/postman/node_modules/waterline/node_modules/async/lib/async.js:162:20
    at iterate (/Users/goliatone/Dev/postman/node_modules/waterline/node_modules/async/lib/async.js:256:13)
