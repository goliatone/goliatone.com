---
title: "The Hardest Bugs"
date: 2014-01-17
template: "post.hbs"
---

## Thougtest BUGs

Thinking about bugs, I can think of three buckets to classify them.
- Implicit acceptance that base conditions are ok: The bug is in the language that you are using, PHP, MySQL*
- Panic induced: Late night deployment, you are tired. You press the button and nothing happens, refresh the browser. Nothing*
- It's a feature, not a bug.

## Assume everything can fail, even the stack.
MySQL 5.2 insert

```sql
SELECT COUNT(DISTINCT(mac)) AS total FROM stats WHERE sighting_time BETWEEN DATE_SUB( NOW(), INTERVAL {period} SECOND) AND NOW();
```

If you are running mysql > 5.6.12, you are golden. In 5.5.22, will return 0. So, if you are working on integration, and the person who worked on the MySQL query swears that it works in their setup it easy to think that the issue comes from the integration.
Challenge base assuptions. It's hard. After all, the alternative is to live in a world of paranoia.


## Panic

Combination of new technologies, different process, and time rush.

Yii uses an asset cache machenism, assets get generated after the first hit. AWS with multiple instances, 10, more than usual. When you hit the  browser, you are not gurarantied to hit the same instance. Load balancer. Cache needs to warm up and assets need to propagate through all different instances.

## It was a feature, but now is a bug.

Human communication. Different people have different perceptions of the same thing. Misscomunication.


