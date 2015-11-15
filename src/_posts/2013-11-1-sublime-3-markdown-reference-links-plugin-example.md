---
title: "Sublime 3 Markdown Reference Links Plugin Example"
date: 2013-11-1
template: "post.hbs"
---

## Simple Sublime Text 3 plugin example


```python
import sublime
import sublime_plugin


class ListLinksCommand(sublime_plugin.TextCommand):
    """
    Markdown, list reference links in quick panel,
    inserts selection
    """
    def on_done(self, index):
        if index == -1:
            return

        startloc = self.view.sel()[-1].end()
        link = self.list[index].split(':')[0] + '[]'
        args = {'pos': startloc, 'text': link}

        self.view.run_command("insert_link", args)

    def run(self, edit):

        self.list = []
        self.view.find_all("(^\\[.*?\\]): (\(?http(s?):\\/\\/.*)", 0, "$1: $2", self.list)

        self.view.window().show_quick_panel(self.list, self.on_done, 1, 2)


class InsertLinkCommand(sublime_plugin.TextCommand):

    def run(self, edit, pos, text):
        self.view.insert(edit, pos, text)

```
