---
title: "Javascript Regexp Match Content Between Html Comments"
date: 2014-02-14
template: "post.hbs"
---

## JavaScript: RegExp to match content between HTML comments.

I'm sure you are familiar with the following [quote][1]:
>Some people, when confronted with a problem, think 
>“I know, I'll use regular expressions.”   Now they have two problems.

And, if you have not read about [Cthulhu's][2] comming on [this][3] StackOverflow post, then go on, I'll wait for you.

Hey, I'm glad you are back. 

We want to get the HTML between two comment tags:
```html
<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!--gconfig-->
    <meta name="platform:ip" content="10.0.2.135">
    <meta name="platform:port" content="9000">
    <meta name="platform:endpoint" content="ws/cs/exhibit">
    <meta name="platform:clientid" content="wits">
    <meta name="platform:exhibitid" content="WhatIsTheSenate">
    <meta name="app:endpoint" content="ws://{{ip}}:{{port}}/{{endpoint}}/{{clientid}}/{{exhibitid}}">
    <!--@gconfig-->
</head>
<body>
</body>
</html>
```

```javascript
var tag = 'gconfig',
    end = '@gconfig',
    matcher = new RegExp('<!--\\s*'+tag+'\\s*-->([\\s\\S]*?)<!--\\s*'+end+'\\s*-->', 'igm'),
    head = $('head').html();

console.log(matcher.exec(head));
```

```output
["<!--gconfig-->
    <meta name="platform:ip" content="10.0.2.135">
    <meta name="platform:port" content="9000">
    <meta name="platform:endpoint" content="ws/cs/exhibit">
    <meta name="platform:clientid" content="wits">
    <meta name="platform:exhibitid" content="WhatIsTheSenate">
    <meta name="app:endpoint" content="ws://{{ip}}:{{port}}/{{endpoint}}/{{clientid}}/{{exhibitid}}">
    <!--@gconfig-->", "
    <meta name="platform:ip" content="10.0.2.135">
    <meta name="platform:port" content="9000">
    <meta name="platform:endpoint" content="ws/cs/exhibit">
    <meta name="platform:clientid" content="wits">
    <meta name="platform:exhibitid" content="WhatIsTheSenate">
    <meta name="app:endpoint" content="ws://{{ip}}:{{port}}/{{endpoint}}/{{clientid}}/{{exhibitid}}">
    "]
```


[1]:(http://regex.info/blog/2006-09-15/247)
[2]:(http://en.wikipedia.org/wiki/Cthulhu)
[3]:(http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454)