---
title: "Mac Osx Brew Install Versions of Psql"
date: 2015-05-24
template: "post.hbs"
---


To install and manage multiple Postgres versions on mac using brew, you can top tinto this repo:
https://github.com/petere/homebrew-postgresql

```
brew tap petere/postgresql
```

Then, you can `brew install <formula>` as needed.
The formulae installed are "keg-only", meaning that they are not linked to /user/bin, thus not getting a `postgresql` command in your terminal. You have to access it with a full path to the keg, `/usr/local/opt/postgresql-9.4/bin/`.

You can use the `postgresql-common` to manage multiple versions.


If you get an error saying that postgres role does not exist:
>** (Mix) The database for HelloPhoenix.Repo couldn't be created, reason given: psql: FATAL:  role "postgres" does not exist


/Applications/Postgres.app/Contents/MacOS/bin/createuser -s postgres
