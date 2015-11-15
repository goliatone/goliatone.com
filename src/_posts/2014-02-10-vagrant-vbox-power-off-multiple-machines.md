---
title: "Vagrant Vbox Power Off Multiple Machines"
date: 2014-02-9
template: "post.hbs"
---

Alias to power of multiple VBox:

```terminal
alias shutdown-vms="VBoxManage list vms | cut -f 1 -d ' ' | xargs -I NAME sh -c 'VBoxManage controlvm NAME poweroff ; VBoxManage unregistervm NAME' ; rm -rf ~/VirtualBox\ VMs/*"```


https://github.com/joshmcarthur/vagrant-list