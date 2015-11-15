---
title: "Mysql 5 5 Now Bug"
date: 2013-08-12
template: "post.hbs"
---

consider the following query:

```sql
SELECT COUNT(DISTINCT(mac)) AS total FROM stats WHERE sighting_time BETWEEN DATE_SUB( NOW(), INTERVAL {period} SECOND) AND NOW();
```

If you are running mysql < 5.6.12, you are golden. In 5.5.22, will return 0.

solution:
```
CAST(NOW() AS char)
```

```sql
SELECT COUNT(DISTINCT(mac)) AS total FROM stats WHERE sighting_time BETWEEN DATE_SUB( CAST(NOW() AS char), INTERVAL {period} SECOND) AND CAST(NOW() AS char);
```
