---
title: "Note to Self Django List Models App"
date: 2013-09-29
template: "post.hbs"
---

## Note to self

### Django: list all models in app:

A quick snippet to list all models declared in a Django app.

```python
from django.db.models import get_app, get_models

app = get_app(<appname>)
for Model in get_models(app):
    instance = Model()  # Create instance
    Model._meta.verbose_name  # Get verbose name
```