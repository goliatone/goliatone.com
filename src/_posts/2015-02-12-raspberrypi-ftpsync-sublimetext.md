---
title: "Raspberrypi Ftpsync Sublimetext"
date: 2015-02-11
template: "post.hbs"
---

## Remote edit files in raspberrypi

To work in your computer and sync files to the raspberry pi you can use the package [FTPSync][package-ftpsync], [repo here][ftpsync-repo]

[package-ftpsync]:https://packagecontrol.io/packages/FTPSync
[ftpsync-repo]: https://github.com/NoxArt/SublimeText2-FTPSync

Your config file should look similar to this one:


```json
{
    "default": {

        "host": "192.168.1.142",
        "username": "pi",  // or null for anonymous login
        "password": "raspberry",
        "path": "/home/pi/CODE/sensor-tap"
}
```


### Setup FTP in raspberry pi

We can use a simple **FTP** server, `vsftp` which is really simple to setup.
SSH in your rsp and from terminal `apt-get` the package:
```terminal
$ sudo apt-get install vsftpd
```

After the package is installed, we need to edit the config file, I use `nano`:
```terminal
$ sudo nano /etc/vsftpd.conf
```

Edit the following lines:
```conf
anonymous_enable=YES #Change To anonymous_enable=NO
#local_enable=YES #Uncomment
#write_enable=YES #Uncomment
```

Add the following to the config file:
```conf
force_dot_files=YES
```

To exit hold the **ctrl** + **x**, then press **y**, hit Return/Enter key.

Restart the **FTP** server:

```terminal
$ sudo servce vsftpd restart
```

**NOTE**
Something to note, the files and their parent directories you want to sync have to be owned by the **pi** user. You can `chown` any file or directory:

```teminal
$ sudo chown -R pi /home/pi/CODE/
```









<!--


At the moment you will need to change the directory every time you login by FTP, to solve this:

Type:
"sudo -i"
"passwd root"
Type in any password (this is only temporary)
"exit"
"exit"
Start a new SSH session
Username: root
Password (the one you just set)
"nano /etc/passwd"
find the line "pi:x;1000:1000:Raspberry Pi User,,,:home/pi:/bin/bash" and change it to "#pi:x;1000:1000:Raspberry Pi User,,,:home/pi:/bin/bash".
Then hold the Ctrl key and press "x", then release Ctrl and press "y" then hit Return / Enter.
"usermod -d /var/www pi"

Now close the SSH session, and start a new one with username: pi and your password, and type the following:

"sudo -i"
"usermod -L root"
"exit"

-->
