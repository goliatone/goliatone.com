---
title: "Mxmcl Error"
date: 2011-07-23
description: "MXMCL Error"
---
Just formatted my box and while doing a fresh install of FlashDevelop, I kept getting this error:
    mxmlc Error Loading: "D:\Program Files\Java\jre6\bin\server\jvm.dll"
The flex compiler (mxmlc) requires that you have the JRE installed in your system, and in particular must be 32 bit (at present). 
The error shown means you have a 64 bit JRE instead -or like in my case case- that you have both installed and it is pointing to the 64 bit version. To fix this, simply point the _JAVA_HOME_ environment variable to a 32 bit version.

If you get the following error:
    This application failed to start because msvcp71.dll was not found. Re-installing the application may fix this problem
You might be missing the dll file or need to replace it. I found a working version [here.](http://www.dlldll.com/msvcp71.dll_download.html)