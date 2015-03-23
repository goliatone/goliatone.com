---
title: "Ubuntu SFTP jails setup"
date: 2011-05-23
description: "How to setup SFTP jail on Ubuntu."
---
Quick note on how to limit user's access with SFTP Jails on Ubuntu.

Access the ssh config file
    nano /etc/ssh/sshd_config 

Modify so that it contains the line

    Subsystem sftp internal-sftp

Add the following block to the end of the file:
    Match group filetransfer
        ChrootDirectory %h
        X11Forwarding no
        AllowTcpForwarding no
        ForceCommand internal-sftp

Restart OpenSSH as follows:

    /etc/init.d/ssh restart


#### Modify user account
If your goal is to give a client or designer access through SFTP to a domain folder, you can start by creating a group for the users- who will only have SFTP access:

    addgroup filetransfer

Next, you will have to create a new user account and relate it to the new group. This will create the user named fileuser and set its home directory in srv/www/[domain]/public_html:
    sudo useradd -d /srv/www/[domain] [username] 
    sudo passwd [username] 
    sudo usermod -G filetransfer [username] 
    sudo chown [username]:[username] /srv/www/[domain]/public_html