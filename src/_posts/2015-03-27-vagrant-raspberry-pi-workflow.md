---
title: "Vagrant Raspberry Pi Workflow"
date: 2015-03-26
template: "post.hbs"
---



Workflow:
- Use Vagrant to manage the state of the image on your dev box
- [Use qemu-img to convert the vmdk to an img file][convert-img] 
- [Flash that to the SD card][flashit]

[Vagrant file][vagpi]

Reads:
- [Why port Docker to the Raspberry Pi?][why-docker]


## Docker
[Running docker][rndocker]
[rndocker]: http://kencochrane.net/blog/2013/05/running-docker-on-a-raspberrypi/

#### Versioning
>Versioning. Docker includes git-like capabilities for tracking successive versions of a container, inspecting the diff between versions, committing new versions, rolling back etc. The history also includes how a container was assembled and by whom, so you get full traceability from the production server all the way back to the upstream developer. Docker also implements incremental uploads and downloads, similar to git pull, so new versions of a container can be transferred by only sending diffs.



Docker and Wave

https://medium.com/@ALGrendel/docker-weave-a-little-cloud-and-a-raspberry-pi-381f73a4376d

wave
https://sreeninet.wordpress.com/2015/01/18/docker-networking-weave/

Docker and Swarm
http://stackoverflow.com/questions/21283517/how-to-link-docker-services-across-hosts
http://blog.docker.com/2015/02/scaling-docker-with-swarm/




Old Resources:
- [compile the Linux Kernel on a Raspberry Pi][adafruit-omatic]
- [Old vagrant dev box][old-dev]
- [raspberry dev box][cpp-dev]
- [raspberry][rsp]


[vagpi]:https://github.com/atapaz/vagrant-raspbian
[why-docker]:https://resin.io/blog/why-port-docker-to-the-raspberry-pi/

[convert-img]: http://docs.openstack.org/image-guide/content/ch_converting.html
[flashit]: http://www.raspberrypi.org/documentation/installation/installing-images/mac.md

[rsp]: https://github.com/vagrant-warrior/raspberry
[cpp-dev]: https://github.com/nickhutchinson/raspberry-devbox
[adafruit-omatic]: https://learn.adafruit.com/raspberry-pi-kernel-o-matic/overview
[old-dev]: https://github.com/Asquera/raspberry-devbox