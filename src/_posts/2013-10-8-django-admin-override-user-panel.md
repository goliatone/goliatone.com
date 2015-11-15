---
title: "Django Admin Override User Panel"
date: 2013-10-8
template: "post.hbs"
---

## Remove Permissions panel from Django user admin panel.

Sometimes it can be a little bit tricky to figure out how to customize your django admin setup.

I had one very specific task:
>Remove the Permissions panel from the Django user admin panel.

The best way I figured to do this, was to extended the `UserAdmin`[1] class and modify the `fieldsets`[2] prop.

```python
from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _


class AdminUser (UserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    # fieldsets = UserAdmin.fieldsets - (
    #     (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
    #                                    'groups', 'user_permissions')}),
    # )


admin.site.unregister(User)
admin.site.register(User, AdminUser)
```


[1]: https://github.com/django/django/blob/master/django/contrib/auth/admin.py#L38
[2]: https://github.com/django/django/blob/master/django/contrib/auth/admin.py#L41
