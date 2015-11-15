---
title: "Mac Osx Brew 404 Error Git Local Changes"
date: 2014-01-18
template: "post.hbs"
---



## Brew herrors:

While doing a `brew search` I got this output on the terminal:

```terminal
Error: 404 Not Found
Please report this bug:
    https://github.com/mxcl/homebrew/wiki/troubleshooting
/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/open-uri.rb:277:in `open_http'
/usr/local/Library/Homebrew/cmd/search.rb:68:in `value'
/usr/local/Library/Homebrew/cmd/search.rb:68:in `search_taps'
/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/open-uri.rb:230:in `inject'
/usr/local/Library/Homebrew/cmd/search.rb:65:in `each'
/usr/local/Library/Homebrew/cmd/search.rb:65:in `inject'
/usr/local/Library/Homebrew/cmd/search.rb:65:in `search_taps'
/usr/local/Library/Homebrew/cmd/search.rb:30:in `search'
/usr/local/Library/brew.rb:95:in `send'
/usr/local/Library/brew.rb:95
```

[Apparently][], that means that you need to `brew update`. 

```terminal
sudo brew update
error: Your local changes to the following files would be overwritten by merge:
        Library/Formula/abcmidi.rb
Please, commit your changes or stash them before you can merge.
Aborting
Error: Failure while executing: git pull -q origin refs/heads/master:refs/remotes/origin/master
```

Aparently, a local file got modified and broke the repo.
#TODO: how does brew store/manage formulas?#

A quick fix would be to reset the repo and checkout the changed files.

```terminal 
cd $(brew --repository)
git reset --hard FETCH_HEAD
```

Follow the link to get an explanation on [FETCH_HEAD][]. But basically, is a reference to the tip of the last fetch.



[Apparently]:(https://github.com/Homebrew/homebrew/issues/24567)
[FETCH_HEAD]: (http://stackoverflow.com/a/9237511/125083)