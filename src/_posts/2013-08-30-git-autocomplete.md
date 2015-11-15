---
title: "Git Autocomplete"
date: 2013-08-29
template: "post.hbs"
---

http://richardhulse.blogspot.com/2008/06/using-git.html

To enable git autocomplete in terminal:

```bash
cp /opt/local/share/doc/git-core/contrib/completion/git-completion.bash ~/.git-autocomplete.sh
```

Then, add the following to `.bashrc` or `.bash_profile`

```bash
source ~/.git-completion.sh
```


* local and remote branch names
* local and remote tag names
* .git/remotes file names
* git 'subcommands'
* tree paths within 'ref:path/to/file' expressions
* common --long-options


If you do aliases for your commands, you will need to add those as well.

```bash
complete -o default -o nospace -F _git_branch gb
complete -o default -o nospace -F _git_checkout gco
```

```bash
alias gst='git status '
alias gc='git commit '
alias gca='git commit -a '
alias ga='git add '
alias gco='git checkout '
alias gb='git branch '
alias gm='git merge '
```


NOTE: If you get the following error:

>bash: __git_ps1: command not found

That means there is a version mismatch, git refactored `__git_ps1` to another file.

```bash
curl -o ~/.git-prompt.sh https://raw.github.com/git/git/master/contrib/completion/git-prompt.sh
source ~/.git-prompt.sh
```
function parse_git_dirty { 
	if [[ $(git status 2> /dev/null | tail -n1) != "nothing to commit (working directory clean)" ]]; then 
 		echo "" 
 	elif [[ $(git status 2> /dev/null | tail -n1) != "no changes added to commit (use \"git add\" and/or \"git commit -a\")" ]]; then 
 		echo "*"
 	elif [[(( $(git status 2> /dev/null | grep 'Your branch is ahead of' | wc -l) != 0 ))]]; then
 		echo "+"
 	fi
}