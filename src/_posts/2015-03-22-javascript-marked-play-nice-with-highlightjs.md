---
title: "Javascript Marked Play Nice with Highlightjs"
date: 2015-03-21
template: "post.hbs"
---


TLDR;
You need to use the `langPrefix` option to include `hljs` class.

Let me start by saying that [marked][2] is **awesome**.

However, if you want to use [highlightjs][1] with [marked][2] you might run into the issue of your `<code>` tags not having a proper background.

That is because, by default it will render the tags as follows:

```html
<code class="lang-php">
```

**highlightjs** expects something different:
```html
<code class="hljs lang-php">
```

You need to use the `langPrefix` option to include `hljs` class.

```javascript
marked.setOptions({
    langPrefix:'hljs lang-',
    highlight: function(code, lang){
        if(!lang) return code;
        try {
            return highlight.highlight(lang, code).value;
        } catch(e){
            console.error('ERROR', e);
            return code;
        }
    }
});
```


[1]: https://highlightjs.org
[2]: https://www.npmjs.com/package/marked