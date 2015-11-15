---
title: "Python Wsgi Script Does Not Contain Application"
date: 2013-10-13
template: "post.hbs"
---

## Target WSGI script 'x' does not contain WSGI application 'application'

Well, believe it or not, the error is what the message reads. You literally need to have a method/var named **application** for **WSGI** to be happy.

>Note that mod_wsgi requires that the WSGI application entry point be called 'application'. If you want to call it something else then you would need to configure mod_wsgi explicitly to use the other name. Thus, don't go arbitrarily changing the name of the function. If you do, even if you set up everything else correctly the application will not be found.