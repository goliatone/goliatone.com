---
title: "Java Ant Build Error"
date: 2011-11-26
template: "post.hbs"
---

Error:
C:\...\build.xml:21: java.lang.UnsupportedClassVersionError: 
    com/sun/tools/javac/Main : Unsupported major.minor version 51.0

The 'Unsupported major.minor version 51.0' means somewhere code was compiled for a version of the JDK, and that you are trying to run those classes under an older version of the JDK.

In my case, the issue was that I  had a jrm which does not have tools.jar, to quickly fix this wihtout messing with sys keys and without changing the java version on the machine
i just copied the file into the lib directory, but i carelessly copied one from a different jdk version.