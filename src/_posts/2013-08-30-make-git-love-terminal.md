---
title: "Make Git Love Terminal"
date: 2013-08-29
template: "post.hbs"
---

## Note to self

Again, a quick one just to remind my self...


```bash
#
#Let's make CLI play sweetness with git.
# Git branch in prompt.
function parse_git_dirty { if [[ $(git status 2> /dev/null | tail -n1) != "nothing to commit (working directory clean)" ]]; then
 echo "*"
 elif (( $(git status 2> /dev/null | grep 'Your branch is ahead of' | wc -l) != 0 )); then
 echo "+"
 fi
}
function parse_git_branch {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/[\1$(parse_git_dirty)]/"
}
export PS1='\u@\h \[\033[1;33m\]\w\[\033[0m\]$(parse_git_branch)$ '
```

List of backslash scaped special character:

* `\a` : an ASCII bell character (07)
* `\d` : the date in "Weekday Month Date" format (e.g., "Sat Aug 31")
* `\D{format}` :	the format is passed to strftime(3) and the result is inserted into the prompt string; an empty format results in a locale-specific time representation. The braces are required
* `\e` : an ASCII escape character (033)
* `\h` : the hostname up to the first '.'
* `\H` : the hostname
* `\j` : the number of jobs currently managed by the shell
* `\l` : the basename of the shell’s terminal device name
* `\n` : newline
* `\r` : carriage return
* `\s` : the name of the shell, the basename of $0 (the portion following the final slash)
* `\t` : the current time in 24-hour HH:MM:SS format
* `\T` : the current time in 12-hour HH:MM:SS format
* `\@` : the current time in 12-hour am/pm format
* `\A` : the current time in 24-hour HH:MM format
* `\u` : the username of the current user
* `\v` : the version of bash (e.g., 2.00)
* `\V` : the release of bash, version + patch level (e.g., 2.00.0)
* `\w` : the current working directory, with $HOME abbreviated with a tilde
* `\W` : the basename of the current working directory, with $HOME abbreviated with a tilde
* `\!` : the history number of this command
* `\#` : the command number of this command
* `\$` : if the effective UID is 0, a #, otherwise a $
* `\nnn` : the character corresponding to the octal number nnn
* `\\` : a backslash
* `\[` : begin a sequence of non-printing characters, which could be used to embed a terminal control sequence into the prompt
* `\]` : end a sequence of non-printing characters