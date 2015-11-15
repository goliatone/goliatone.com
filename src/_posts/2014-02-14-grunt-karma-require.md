---
title: "Grunt Karma Require"
date: 2014-02-13
template: "post.hbs"
---

# Karma, require, dependencies path issue

If you get a similar error message:

>Running "karma:unit" (karma) task
ERROR: 'There is no timestamp for /base/app/js/services/platformclient.js!'

It probably means that the file is not available in the current browser session.

Just update your `karma.config.js` file, and make sure that there is a pattern for the file:

## TODO: REMOVE ACTUAL PATHS, CLEAN UP EXAMPLE
```javascript
config.set({

        // base path, that will be used to resolve files and exclude
        // basePath: 'tmp/public',
        basePath: '',

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'app/components/jquery/jquery.js', included: false},
            {pattern: 'app/components/requirejs/require.js', included: false},
            {pattern: 'app/components/gconfig/gconfig.js', included: false},
            {pattern: 'app/js/*.js', included: false},
            {pattern: 'app/js/services/*.js', included: false},
            {pattern: 'test/spec/*-spec.js', included: false},
        ],
        ...
```