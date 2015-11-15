---
title: "Bash Terminal Pipe Status Command"
date: 2014-09-16
template: "post.hbs"
---

## Exit status

REDO!!!
```terminal
cat /usr/share/dict/words |     # Read in the system's dictionary.
grep purple |                   # Find words containing 'purple'
awk '{print length($1), $1}' |  # Count the letters in each word
sort -n |                       # Sort lines ("${length} ${word}")
python fail.py |                # Play Russian Roulette with our data!
tail -n 1 |                     # Take the last line of the input
cut -d " " -f 2 |               # Take the second part of each line
cowsay -f tux                   # Put the resulting word into Tux's mouth
```

If you execute a bunch of piped commands, and somewhere in the line a process fails, `bash` reports that the pipeline executed without errors because `bash` only reports the status of the last process.

```bash
bash-3.2$ echo $?
0
```

To get the status of every process in the previous pipe chain we can use `bash` $PIPESTATUS.

```bash
bash-3.2$ echo ${PIPESTATUS[*]}
0 0 0 0 1 0 0 0
```

Although one of the processes crashed, we still got a response back with all the processes after the crash executing as expected.