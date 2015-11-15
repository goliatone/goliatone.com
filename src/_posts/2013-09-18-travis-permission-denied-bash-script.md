---
title: "Travis Permission Denied Bash Script"
date: 2013-09-17
template: "post.hbs"
---

## Note to self

Running a travis build script, if you get an error like the following:

```terminal
$ ./travis/setup-mysql.sh
/home/travis/build.sh: line 145: ./travis/setup-mysql.sh: Permission denied
The command "./travis/setup-mysql.sh" failed and exited with 126 during before_script.
Your build has been stopped.
```

The solution is to `chmod` the bash script in your `travis` file:

```terminal
before_script:
 - chmod +x ./travis/setup-mysql.sh
```