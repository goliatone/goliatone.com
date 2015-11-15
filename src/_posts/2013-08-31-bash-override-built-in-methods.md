---
title: "Bash Override Built in Methods"
date: 2013-08-30
template: "post.hbs"
---

## Bash, override built in method

It turns out you can override a built in method, quite simple actually.

```bash
function cd {
    # actually change the directory with all args passed to the function
    builtin cd "$@"

    # We get access to OLDPWD and PWD.
   	echo "Changed directories from '${OLDPWD}' to '${PWD}'."
}
```
If you add the following to your `~/.bash_profile` it will always be in effect for interactive shells.

To find the current `cd` definition:

```bash
shopt -s extdebug ; declare -F cd
#cd 18 ~/.rvm/scripts/cd
```
[rvm][] [overrides][] the built in cd command. If you want to add your custom method and keep `rvmrc` working, you can use the provided [hooks].
Place your script `~/.rvm/hooks/after_cd`

As part of the rvm installation process you need to source the script, adding the following to your `.bash_profile`:

```bash
[[ -s $HOME/.rvm/scripts/rvm ]] && source $HOME/.rvm/scripts/rvm
```

**Note that the override will not work with `popd` and `pushd`.**


[rvm]: https://rvm.io/workflow/rvmrc
[hooks]: https://rvm.io/workflow/hooks
[overrides]: https://github.com/wayneeseguin/rvm/blob/master/scripts/cd#L7-118

[stack overflow 1]: http://stackoverflow.com/questions/5605277/how-does-rvm-detect-when-youve-changed-directories