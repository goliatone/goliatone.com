---
title: "Rsync Backup"
date: 2013-08-21
template: "post.hbs"
---

## Remote backups with rsync (MacOS => Ubuntu)
http://www.dedoimedo.com/computers/rsync-guide.html
http://www.evbackup.com/support-rsync-setup/
http://superuser.com/questions/286911/save-output-to-a-text-file-from-mac-terminal

TODO: UPDATE EXAMPLE CODE

Test you can log in without password prompt.

```bash
sudo ssh -i /backup/ssh_key user@user.evbackup.com
```

If you don't look the appendix

```bash
#Notice we are using --dry-run :)
sudo rsync -avz --dry-run -e "ssh -i /Users/emilianoburgos/.ssh/id_rsa.pub" ./lib root@178.79.145.84:/root/tmp
```

-avs - All objects, verbose output, do not allow remote shell to interpret characters; in other words, file names with spaces and special characters will not be translated, which is what you want most likely, especially if you have Windows files, too.

--delete will delete files at the target (destination), if they do not exist in the source. This means you will always keep an up to date list of files and the source and destination will match, plus the destination will not slowly grow in size with older, perhaps irrelevant content.

### Advanced options

There are a million, literally. So here's a sampling of good things:

* `-l (lowercase L)` when symlinks are encountered, recreate the symlink on the destination.

* `--exclude=PATTERN` exclude files matching **PATTERN**

* `--exclude-from=FILE` read exclude patterns from **FILE**

* `--include=PATTERN` don't exclude files matching **PATTERN**

* `--include-from=FILE` read include patterns from **FILE**

Likewise, the option `--files-from=FILE` allows you to specify a detailed list of directories you wish to include in your backup. Please note that if you write down directory paths without trailing slash, they will be recreated blank, and if you do add the trailing slash, their content will also be copied.


### Cron job

Read about [pipes](http://www.westwind.com/reference/os-x/commandline/pipes.html)

We are appending both standard output and standard error to a log file sync.log. If you only want to output standard error, use 
`2>> sync.log` 
If you use `>` instead of `>>` you will be overriding instead of appending- so that your file does not grow to big.

```bash
#!/bin/bash

echo "Start rsync job"
sudo rsync -avz --dry-run -e "ssh -i /Users/emilianoburgos/.ssh/id_rsa.pub" ./lib root@178.79.145.84:/root/tmp &>> sync.log

exit 0
```

[Crontab](http://linux.die.net/man/1/crontab)

```bash
* */1 * * * /home/roger/rsync-backup.sh
```

#### Appendix

* How to create ssh keys:

Create keys:

```bash
#Notice the command ends in ''
 sudo ssh-keygen -f /backup/ssh_key -t rsa -N ''
```

Updload keys:

```bash
#Port defaults to 22
ssh-copy-id <username>@<host> -p <port_nr>
```
If you do not have `ssh-copy-id` on your machine, you can either `brew` it or do the following:
>Another alternative is to copy the public key file to the server and concatenate it onto the authorized_keys file manually. It is wise 
to back that up first:

>```bash
cp authorized_keys authorized_keys_Backup
cat id_rsa.pub >> authorized_keys
```




Read more at [Ubuntu's](https://help.ubuntu.com/community/SSH/OpenSSH/Keys) page