---
title: "Ffmpeg Gists"
date: 2014-06-9
template: "post.hbs"
---

## ffmpeg: Convert mov to mp4


Convert from **mov** to **mp4**:

`ffmpeg -i movie.mov -vcodec copy -acodec copy output.mp4`


To do compression:

`ffmpeg -i input.mp4 -vcodec libx264 -crf 20 output.mp4`


>Calculate the bitrate you need by dividing 1 GB by the video length in seconds. So, for a video of length 16:40 (1000 seconds), use a bitrate of 1000000 bytes/sec:

>ffmpeg -i input.mp4 -b 1000000 output.mp4
Additional options that might be worth considering is setting the Constant Rate Factor, which lowers the average bit rate, but retains better quality. Vary the CRF between around 18 and 24 — the lower, the higher the bitrate.

>ffmpeg -i input.mp4 -vcodec libx264 -crf 20 output.mp4


## prores
`ffmpeg -i placeholder.mov -vcodec libx264 -acodec libfaac -b:v 1000k -b:a 128k -threads 0 -pix_fmt yuv420p orientation_raw.mp4`