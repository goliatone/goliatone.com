---
title: "Note to Self Mysql Create User"
date: 2013-12-27
template: "post.hbs"
---

##MySQL: Create user

Quick note, create user in MySQL CLI:

Login into mysql:

```terminal
mysql -u root -p
#remote
mysql -u root -h <server_hostname> -p
```

```sql
CREATE DATABASE <database>;
CREATE USER '<username>'@'localhost' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON <database>.* TO '<username>'@'localhost';
FLUSH PRIVILEGES;
```

```sql
#show users
SELECT User FROM mysql.user;
#show tables
SHOW databases;
```

If you need to delete a user:
```sql
DROP USER '<username>'@'localhost';
```

To revoke permissions:

```sql
REVOKE <permission> ON <database>.<table> FROM '<username>'@'localhost';
```

Test new user:
```sql
#exit mysql console
\q
```

Login again with the new user:

```terminal
mysql -u <username> -p
```


### User permissions: 

- `CREATE` Create new tables or databases
- `DROP` Delete tables or databases
- `DELETE` Delete rows from tables
- `INSERT` Insert rows into tables
- `SELECT` Select command to read through databases
- `UPDATE` Update table rows
- `GRANT OPTION` Manage other users' privileges
- `ALL PRIVILEGES` 