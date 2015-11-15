---
title: "Python Django Create Different Environments"
date: 2013-09-6
template: "post.hbs"
---




set environment var
http://stackoverflow.com/questions/15048963/alternative-to-the-deprecated-setup-environ-for-one-off-django-scripts

production vs development settings:
http://stackoverflow.com/questions/1626326/how-to-manage-local-vs-production-settings-in-django

postgres
`sudo -u postgres psql ` login
`\list` => show databases
`\c nuskin_production ` use table
`\dt` => describe tables
auth_user