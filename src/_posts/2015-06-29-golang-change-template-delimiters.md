---
title: "Golang Change Template Delimiters"
date: 2015-06-28
template: "post.hbs"
---



The `html/template` [package][tmp] uses `{{` and `}}` as default delimiters, which might conflict with any front end template logic that you might have on a served html.

To fix this, you can change the value of the delimiters.

```go
indexTmpl = template.New("index.html").Delims("<%", "%>")
indexTmpl, _ = indexTmpl.ParseFiles("index.html")
```


[tmp]: http://golang.org/pkg/text/template