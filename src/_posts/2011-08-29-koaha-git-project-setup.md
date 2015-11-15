---
title: "Koaha Git Project Setup"
date: 2011-08-28
template: "post.hbs"
---

we will be using unffudle.
create project local, follow instructions at:
***********
Introduction 

Git is a distributed version control system, originally developed by Linus Torvalds for Linux kernel development. It has grown over the years to serve as the development platform for many other very large and active open source projects. It has grown for a very simple reason: it is excellent.

Once you have the Git client installed on your development machine, accessing your repository is simple.

Authentication 

Unfuddle offers you secure, direct access to your Git repositories over SSH.

Unfuddle will authenticate all access to your repositories using a public key cryptography over SSH. As such, you must first create a keypair locally on your machine and paste the contents of your public key into your "Personal Settings". For more information on how to generate a public key, please see Creating an SSH Keypair.

Importing 

Local Repository Creation
If you are loading up your Git repository for the first time, you will first need to create a local Git repository on your machine by doing the following:

$ mkdir /path/to/repository
$ cd /path/to/repository
$ git init
Once you have created a Git repository, it's time associate the Unfuddle repository with your local one and designate it as an upstream server.

$ cd /path/to/repository
$ git remote add unfuddle git@goliatone.unfuddle.com:goliatone/ylm.git
$ git config remote.unfuddle.push refs/heads/master:refs/heads/master
Before you can push your code to the Unfuddle repository you must be sure to add your files to the local index then commit them.

$ git add *
$ git commit -am 'initial commit'
Finally, you are now ready to push any locally made commits to your newly created Unfuddle Git repository.

$ git push unfuddle master
Congratulations! You should now see all of your commits and files within your Unfuddle repository up online. Other members of your project may now clone the repository.

NOTE: Unlike Subversion, it is not possible to clone a brand new repository. You must first push data to it and only then it can be cloned by others.

Cloning 

If your Git repository has already been populated with some commits, then it is now possible to clone that repository onto any number of machines.

$ git clone git@goliatone.unfuddle.com:goliatone/ylm.git
*************

//http://stackoverflow.com/questions/1777854/git-submodules-specify-a-branch-tag
git submodule add git://github.com/kohana/kohana.git kohana
cd kohana
git checkout v3.0.12
=> might now owrk: git checkout -b 3.0 origin/3.0/master
git submodule init
git submodule update
cd ..
git add kohana
git commit -m "moved kohana to v3.0.12"
git push 
git push unfuddle master



to check out:
http://twoguysarguing.wordpress.com/2010/11/14/tie-git-submodules-to-a-particular-commit-or-branch/

