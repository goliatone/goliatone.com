---
title: "Mxmclerror"
date: 2011-10-12
template: "post.hbs"
---

http://jase21.blogspot.com/2010/07/mxmlc-error-loading-dprogram.html
mxmlc Error Loading: "D:\Program Files\Java\jre6\bin\server\jvm.dll"
mxmlc which is the flex compiler requires that you have Java Runtime Environment installed in you system which in particular must be 32 bit (at present). 
The error - Error Loading: "D:\Program Files\Java\jre6\bin\server\jvm.dll" is shown means you are having a 64 bit JRE. You need to point to a 32 bit version.
Open the Environment Variable window and configure as shown in the screenshot.
Create a new variable called JAVA_HOME with value pointing to the 32 bit version of JRE. In my case its D:\Program Files (x86)\Java\jre1.6.0_07\
Now mxmlc should work.

This application failed to start because msvcp71.dll was not found. Re-installing the application may fix this problem
http://pcsupport.about.com/od/findbyerrormessage/a/msvcp71-dll-not-found-missing-error.htm
http://www.tomshardware.co.uk/forum/186248-13-cant-launch-game-msvcr71-found
http://www.duckware.com/tech/java6msvcr71.html

downooad => http://www.dlldll.com/msvcp71.dll_download.html



FLASH DEVELOP ERROR
Debugger startup error: System.DllNotFoundException: jvm.dll
http://www.flashdevelop.org/community/viewtopic.php?p=38944