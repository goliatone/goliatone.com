---
title: "Nvm Node Version Manager"
date: 2013-08-19
template: "post.hbs"
---

nvm is to node what rvm is to ruby. If you want to have multiple versions of Node installed in the same machine, then this is the way to go.

To install on Mac:

```bash
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
source ~/.nvm/nvm.sh
```

To list available versions, if you have brew installed, you can run:

```bash
brew versions node
```

Then, you can install whatever version you want.

```bash
nvm install 0.8.22  #(or whatever version of Node.js you want)
```

To switch between versions:

```bash
nvm use 0.8.22
```

You can even run an specific app with one version:

```bash
nvm run 0.8.22 index.js
```



```man
Node Version Manager

Usage:
    nvm help                    Show this message
    nvm install [-s] <version>  Download and install a <version>
    nvm uninstall <version>     Uninstall a version
    nvm use <version>           Modify PATH to use <version>
    nvm run <version> [<args>]  Run <version> with <args> as arguments
    nvm ls                      List installed versions
    nvm ls <version>            List versions matching a given description
    nvm ls-remote               List remote versions available for install
    nvm deactivate              Undo effects of NVM on current shell
    nvm alias [<pattern>]       Show all aliases beginning with <pattern>
    nvm alias <name> <version>  Set an alias named <name> pointing to <version>
    nvm unalias <name>          Deletes the alias named <name>
    nvm copy-packages <version> Install global NPM packages contained in <version> to current version

Example:
    nvm install v0.4.12         Install a specific version number
    nvm use 0.2                 Use the latest available 0.2.x release
    nvm run 0.4.12 myApp.js     Run myApp.js using node v0.4.12
    nvm alias default 0.4       Auto use the latest installed v0.4.x version
```