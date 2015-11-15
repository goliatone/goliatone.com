---
title: "Add Syntax Support to Nano"
date: 2013-08-29
template: "post.hbs"
---

## PHP

```bash
sudo nano /usr/share/nano/php.nanorc
```

```bash
syntax "php" "\.php|\.inc$"
color white start="<\?(php)?" end="\?>"
color magenta start="<[^\?]" end="[^\?]>"
color magenta "\$[a-zA-Z_0-9]*"
color brightblue "\->[a-zA-Z_0-9]*"
color cyan "(\[)|(\])"
color brightyellow "(var|class|function|echo|case|break|default|exit|switch|if|else|elseif|@|while|return|public|private|proteted|static)\s"
color brightyellow "\<(try|throw|catch|operator|new)\>"
color white "="
color green "[,{}()]"
color green "=="
color brightgreen "('[^']*')|(\"[^"]*\")"
color yellow start="/\*" end="\*/"
color yellow start="#" end="$"
color yellow "//.*"
```

### Get themes
You can download themes from [here](https://github.com/scopatz/nanorc)
Then, with this

Now, if you want to add syntax highlighting.

```bash
# sudo mkdir ~/.nano/
ls ~/.nano/*.nanorc | xargs -I {} echo 'include "{}"' >> ~/.nanorc
```