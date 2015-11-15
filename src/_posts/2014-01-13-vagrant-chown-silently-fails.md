---
title: "Vagrant Chown Silently Fails"
date: 2014-01-12
template: "post.hbs"
---

## Vagrant fails to change file permissions in synced folder

Setting up a **LAMP** **Vagrant** sandbox, I kept running on different issues that boiled down to this:
I could change/set permissions for files and directories outside the vagrant synced folder, and for files inside the synced folder. But _not directories_.

[As it turns out][], there is a constraint from VirtualBox on vagrant disallowing you to set permissions on the synced folder from inside the guest OS.

This was the initial setup in the Vagrant file:

```ruby
config.vm.synced_folder "./app", "/var/www"
```

If you check the documentation for [synced folders][], you can see that some of the different options look promissing.
To modify the owner/group

```ruby
config.vm.synced_folder "./app", "/var/www", owner: "www-data", group: "www-data"
```

And then, using `mount_options` assing the permissions for the synced from the vagrant file:

```ruby
config.vm.synced_folder "./app", "/var/www", :owner=> 'www-data', :group=>'www-data',
    :mount_options => ['dmode=775', 'fmode=775']
```



[synced folders]: (http://docs.vagrantup.com/v2/synced-folders/basic_usage.html)
[As it turns out]: (https://github.com/mitchellh/vagrant/issues/897)