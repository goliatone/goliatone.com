---
title: "Raspberry Pi Assign Local Domain"
date: 2015-03-27
template: "post.hbs"
---


Instead of accessing a Raspberry Pi by it's IP address I find it easier to assign it a **<hostname>.local** domain.

I work on a Mac which comes with Bonjour. On the Raspberry Pi I use Avahi.

Fist update your pi:
```
$ sudo apt-get update
```

Installing Avahi is as simple as typing the following command from your RPI's terminal:
```bash
$ sudo apt-get install avahi-daemon 
```

After installation you don't have to reboot the Raspberry Pi, it will answer to local network queries for its **hostname** at **raspberrypi.local**.

## Change hostname 
If you want to change the default **hostname** of your Raspberry Pi from *raspberrypi* to something else you need to first change the **hostname**.

Open the *hostname* file:
```
sudo nano /etc/hostname
```

Change **raspberrypi** to whatever you want- as an example I will use **minipi**.

The next step is to edit the `hosts` file:

```
sudo nano /etc/hosts
```

And then, find the line that declares the hostname:

```
127.0.1.1   raspberrypi
```

Change it to whatever you used before:

```
127.0.1.1   minipi
```

Next, we need to commit the changes:
```
sudo /etc/init.d/hostname.sh
```

NOTE: 
You might get an error after executing the previous command:
>sudo: unable to resolve host raspberrypi

Validation, it can't resolve the old name since we changed it.

If you run the `hostname` command you should see printed the new name in the terminal:
```
$ hostname
minipy
```

And reboot the machine:

```
sudo reboot
```

From your main computer, you can now you should be able to `ssh` into the box using the local domain:

```
ssh pi@minipi.local
```

