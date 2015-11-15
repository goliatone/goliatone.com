---
title: "Htaccess Directory"
date: 2011-12-2
template: "post.hbs"
---

I need to make all content under a certain directory with one exception. There is one directory that has to be accessible through the browser.

The layout could be something like this:

**backend**/

|-admin

|-system
|-themes
|-**uploads**

You can deny all access by placing an htaccess under **backend** file with the following:

    Order Deny,Allow
    Deny From All

You then need to overwrite this rules under **uploads** with a another htaccess file with this orders:

    Allow From All

 