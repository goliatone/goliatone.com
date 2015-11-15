---
title: "Python Django Nginx Gunicorn"
date: 2013-09-16
template: "post.hbs"
---

## Django code not updated after source update.

Jenkins, after code update, we need to restart gunicorn.

When the code is updated, there’s no need to restart nginx; instead, gunicorn is restarted (not so prettily) with:

`kill -HUP <main gunicorn process id>`


[1]: (http://facundoolano.wordpress.com/2011/09/23/deploying-a-django-project-on-nginx-with-gunicorn/)