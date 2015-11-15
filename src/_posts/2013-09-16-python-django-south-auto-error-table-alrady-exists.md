---
title: "Python Django South Auto Error Table Alrady Exists"
date: 2013-09-15
template: "post.hbs"
---

## South, migrations out of order

```python
python manage.py schemamigration <appname> --auto
python manage.py migrate
```

If you crate a migration and when you run it you get the following error or similar:

```bash
_mysql_exceptions.OperationalError: (1050, "Table '<tablename>' already exists")
```


Also, if you are getting this error when running tests, you might as well just disable migrations when you run the tests:
`SOUTH_TESTS_MIGRATE = False`