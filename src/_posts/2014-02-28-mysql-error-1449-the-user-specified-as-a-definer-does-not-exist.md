---
title: "Mysql Error 1449 the User Specified as a Definer Does Not Exist"
date: 2014-02-27
template: "post.hbs"
---

## Mysql Error #1449

>#1449 - The user specified as a definer ('username'@'%') does not exist

Basically, MySQL is wining about the user that created a procedure is now undefined. It could have been deleted or it could be that you copied a `mysql_dump` and carried an inexistent user.

```SQL
GRANT ALL ON *.* TO 'username'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

Here you have to change `username` and `password` with whatever you need.