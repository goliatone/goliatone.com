---
title: "Python Terminal Progress Bar"
date: 2013-09-17
template: "post.hbs"
---

## Python: How to make a progress bar in terminal.


```python
def upload_progres(self, loaded=0, total=0, delay=0.4):
        percent = int((loaded*100)/total)
        remainder = 100 - percent
        output = '[{0}{1}] {2}%\r'.format('#'*percent, ' '*remainder, percent)
        if percent == 100:
            output = output + '\n'
            delay = 0
        sys.stderr.write(output)
        sleep(delay)
        #TODO: We could get rid of this with a closure.
        if percent == 100:
            self.upload_done()
```