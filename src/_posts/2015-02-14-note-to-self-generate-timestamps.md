---
title: "Note to Self Generate Timestamps"
date: 2015-02-13
template: "post.hbs"
---


# Generate UNIX timestamps


JavaScript:
```js
var timestamp = Math.floor(Date.now()/1000); 
//var timestamp = Math.floor((new Date).getTime()/1000);
```

Java:
```java
long timestamp = System.currentTimeMillis()/1000;
```


Python:
```python
timestamp = int(time.time())
```

Ruby:
```ruby
timestamp = Time.now.to_i
```

Erlang:
```erlang
{Mega, Secs, _} = now(),
Timestamp = Mega * 1000000 + Secs,
```

PHP:
```php
<?php
$timestamp = time();
?>
```

MySQL:
```sql
SELECT FROM_UNIXTIME(1423946047);
```
