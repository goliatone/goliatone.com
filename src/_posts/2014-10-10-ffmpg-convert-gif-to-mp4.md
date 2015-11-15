---
title: "Ffmpg Convert Gif to Mp4"
date: 2014-10-9
template: "post.hbs"
---

# FFmpeg: Convert gif to mp4.

There is a [guide on the FFMpeg][guide] trac site that describes how to create a video from a sequence of images.

One command extracted from that guide:
```terminal
ffmpeg -framerate 1/5 -i img%03d.png -c:v libx264 -r 30 -pix_fmt yuv420p out.mp4
```

```terminal
ffmpeg -f gif -i infile.gif outfile.mp4
```

Another command:

```terminal
ffmpeg -i infile.gif -c:v libvpx -crf 12 -b:v 500K outfile.mp4
```

[guide]: https://trac.ffmpeg.org/wiki/Create%20a%20video%20slideshow%20from%20images