---
title: "Raspberry Pi Set up Enable Ssh Login"
date: 2015-04-29
template: "post.hbs"
---


cd ~
mkdir ~/.ssh
cat keys.txt > authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys    


### Edit the ssh config file /etc/ssh/sshd_config
sudo nano /etc/ssh/sshd_config

Somewhere in this file (usually on page 2 – CTRL+V for next page) should be a parameter
#PasswordAuthentication yes

This needs to be uncommented (remove the #) and yes changed to no
PasswordAuthentication no


Changing the ssh port number from the default 22
The world and his wife know that the default port number for ssh is port 22. It is a good idea to change the port to something non-standard and forward to that port from your router. You can also set up ssh to use more than one port, (e.g one for local “traffic” and another forwarded from external connections by your router).

Broadly speaking, you can choose any port number between 1 and 65535, but it’s worth checking on a list of commonly used ports to avoid messing something up.

If you want to change the port number, it’s near the top of the sshd_config file.
Port 22

You can just change 22 to your chosen port number, or you can add a new line with your new port number in if you want to use more than one port.
Port 777

Once you’ve done that, we need to save and exit the configuration file.
CTRL+O (save)
Enter (confirm file name)
CTRL+X (Exit)


Restarting the ssh server
Your new ssh configuration settings won’t take effect until you restart the ssh server. You can either use this command…

sudo /etc/init.d/ssh restart

or you can reboot your Pi.

sudo reboot

And from now on, you will only be able to ssh into your Pi using keys and you have enhanced your security enormously. :) Good job! May your data always be safe and secure. (Of course this does not affect the normal console login if you are using keyboard and screen connected directly to your RasPi.)

Set up port forwarding on your router
All that will work fine on your LAN, but if you want access from outside, you’ll then have to set up port forwarding on your router. What you will need to do is log into your router’s control panel and set it up so that when you try to log into a specified port on your router (e.g. port 777 if that’s what you set ssh to listen on) all such traffic is diverted to the local ip address and port number of the Raspberry Pi.

An example. If your internet connection’s ip address is 111.222.333.444 and your RasPi is on 192.168.0.45 and you set up ssh to listen on port 777, you would need to set up port forwarding so that whenever anyone tries to access 111.222.333.444:YYY it would forward all that traffic to local ip 192.168.0.45:777 On some routers you can set the incoming YYY to whatever you like. On others it must be the same as the 777.

There are so many different types of routers, I’m afraid I can’t offer help with that part of the setup, or be more specific. But once you’ve got port forwarding set up, you should be able to ssh in from outside. If your internet provider gives you a dynamic IP address, you will probably need to look into something called DDNS to keep track of your ever-changing internet connection’s IP address.