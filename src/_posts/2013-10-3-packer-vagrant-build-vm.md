---
title: "Packer Vagrant Build Vm"
date: 2013-10-3
template: "post.hbs"
---

# Archive SRC repo
git archive -o nuskin-cms.zip HEAD
#
PACKER_LOG=1 packer build --only=virtualbox CG-RAA-packer-virtualbox-testing-2.json

vagrant box add whateveryouwantittobe packer_virtualbox_virtualbox.box