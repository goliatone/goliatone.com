---
title: "Mac how to Make Icns"
date: 2014-12-25
template: "post.hbs"
---

## Make icns from Iconset:



```
Use iconutil to Create an icns File Manually

The iconutil command-line tool converts iconset folders to deployment-ready, high-resolution icns files. (You can find complete documentation for this tool by entering man iconutil in Terminal.) Using this tool also compresses the resulting icns file, so there is no need for you to perform additional compression.

To convert a set of icons to an icns file

Enter this command into the Terminal window:

iconutil -c icns <iconset filename>

where <iconset filename> is the path to the folder containing the set of icons you want to convert to icns. The output is written to the same location as the iconset file, unless you specify an output file as shown:

iconutil -c icns -o <icon filename> <iconset filename>
```


```terminal
mkdir MyIcon.iconset
sips -z 16 16     Icon1024.png --out MyIcon.iconset/icon_16x16.png
sips -z 32 32     Icon1024.png --out MyIcon.iconset/icon_16x16@2x.png
sips -z 32 32     Icon1024.png --out MyIcon.iconset/icon_32x32.png
sips -z 64 64     Icon1024.png --out MyIcon.iconset/icon_32x32@2x.png
sips -z 128 128   Icon1024.png --out MyIcon.iconset/icon_128x128.png
sips -z 256 256   Icon1024.png --out MyIcon.iconset/icon_128x128@2x.png
sips -z 256 256   Icon1024.png --out MyIcon.iconset/icon_256x256.png
sips -z 512 512   Icon1024.png --out MyIcon.iconset/icon_256x256@2x.png
sips -z 512 512   Icon1024.png --out MyIcon.iconset/icon_512x512.png
cp Icon1024.png MyIcon.iconset/icon_512x512@2x.png
iconutil -c icns MyIcon.iconset
rm -R MyIcon.iconset
```


[stack-overflow]: http://stackoverflow.com/questions/12306223/how-to-manually-create-icns-files-using-iconutil