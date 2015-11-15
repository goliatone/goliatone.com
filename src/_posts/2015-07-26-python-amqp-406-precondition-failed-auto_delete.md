---
title: "Python Amqp 406 Precondition Failed Auto Delete"
date: 2015-07-25
template: "post.hbs"
---


[tutorial 5][2]

>pika.exceptions.ChannelClosed: (406, "PRECONDITION_FAILED - inequivalent arg 'auto_delete' for exchange 'wework.dev' in vhost 'ivgdeswq': received 'false' but current is 'true'")


```python
channel.exchange_declare(exchange='loging.dev',
                         type='topic')

routing_key = sys.argv[1] if len(sys.argv) > 1 else 'anonymous.info'

message = ' '.join(sys.argv[2:]) or 'Hello World!'

channel.basic_publish(exchange='loging.dev',
                      routing_key=routing_key,
                      body=message)

print " [x] Sent %r:%r" % (routing_key, message)

connection.close()
```

The fix is just a configuration paramter:

```python
channel.exchange_declare(exchange='loging.dev',
                        auto_delete=True,
                         type='topic')
```

[Routing automatic][1]


[1]: http://celery.readthedocs.org/en/latest/userguide/routing.html#routing-automatic
[2]: http://www.rabbitmq.com/tutorials/tutorial-five-python.html
