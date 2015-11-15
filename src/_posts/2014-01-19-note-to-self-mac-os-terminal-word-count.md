---
title: "Note to Self Mac Os Terminal Word Count"
date: 2014-01-18
template: "post.hbs"
---



Count the number of lines, words, and characters of a text file, mac.

`wc` will give you counts for print newline, word, and byte for a specified file. 
You can see the explainshell entry here, [wc explained][]. 

```bash
wc -l <text_file>
```

w: words
c: characters


### Total number of files on directory:

```bash
ls -l *.pdf | wc -l
```


```bash
tail -600000 <source_file> | tr '\t' ',' | cut -d, -f-12 > <output_file> 
head -10000 <source_file> | tr '\t' ',' | cut -d, -f-12 > <output_file> 
cat <source_file> | tr '\t' ',' | cut -d, -f-12 > <output_file> 
```


[wc explained]: (http://explainshell.com/explain?cmd=wc+-l+text.txt)