---
title: "Javascript Callback Hell"
date: 2013-09-9
template: "post.hbs"
---

### Callback hell

So, one of the biggest rants people have about JS, node specifically, is the so denominated [callback hell][]. You know [where code marches to the right faster than it moves forward][]. The [Piramid of Doom][]? Common, I'm [sure][] you know what I'm talking about.
In JavaScript's defense, I will show you [this][]...

It goes a little bit like this:

```javascript
User.create = function (data, callback) {
    var node = db.createNode(data);
    var user = new User(node);
    node.save(function (err) {
        if (err) return callback(err);
        node.index(INDEX_NAME, INDEX_KEY, data.email, function (err) {
            if (err) return callback(err);
            callback(null, user);
        });
    });
};
```

Some might argue that is basically an stylistic or design choice. I agree. There are different approaches to tackle this differently.

You can go the promise route.

```javascript
User.create = function (data) {
    var node = db.createNode(data);
    var user = new User(node);
    var savedPromise = node.save();
    var responsePromise = savedPromise.then(onSavedResponse, onSavedError);
    responsePromise.then(onUpdateIndex, onUpdateError);
    return new Promise(user);
};
```

Or you could chain them:

```javascript
User.create = function (data) {
    var node = db.createNode(data);
    var user = new User(node);
    node.save()
        .then(onSavedResponse, onSavedError)
        .then(onUpdateIndex, onUpdateError);

    return new Promise(user);
};
```

You can also go the event driven route, and do something like this:

```javascript
User.create = function (data) {
    var node = db.createNode(data);
    var user = new User(node);
    node.save(User._onCreated.bind(this, user, node));
};
User._onCreated = function(user, node, err, res /*ignored*/){
    node.index(INDEX_NAME, INDEX_KEY, data.email,
               User._onIndexed.bind(this, user));
};

User._onIndexed = function(user, err, res /*ignored*/) {
    if (err) return this.dispatcher.emmit('create:error', err);
    this.dispatcher.emmit('create:result', user);
};
```

http://blog.caplin.com/2013/03/13/callback-hell-is-a-design-choice/

Resources about promises and node:
- [StrongLoop][]
- Etc

[StrongLoop]: (http://blog.strongloop.com/promises-in-node-js-with-q-an-alternative-to-callbacks/)

[Piramid of Doom]: (http://calculist.org/blog/2011/12/14/why-coroutines-wont-work-on-the-web)

[callback hell]: (http://callbackhell.com/)

[sure]: (http://stackoverflow.com/a/18229477/125083)

[this]: (https://github.com/panique/php-login/blob/de36e6c1a15706011e4c86a21b2b5de1ac16538b/0-one-file/index.php#L98-L130)

[where code marches to the right faster than it moves forward]: (https://github.com/kriskowal/q#readme)

