---
title: "Note to Self Apache Install Module"
date: 2013-12-26
template: "post.hbs"
---

### Activate module in apache

To activate the module:

```terminal
sudo a2enmod expires
```

Then, restart apache:

```bash
sudo /etc/init.d/apache2 restart
```