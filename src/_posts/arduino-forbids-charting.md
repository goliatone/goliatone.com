---
title: Arduino forbids comparison between pointer and integer error.
date: 2015-03-19
author: goliatone
template: post.hbs
---
## Arduino: ISO C++ forbids comparison between pointer and integer

Following a simple _hello world_ example for the **Arduino Yún** got me for a second. The error output was the following:

```
Build options changed, rebuilding all
data_logger.ino: In function 'String getTimeStamp()':
data_logger.ino:46:13: error: ISO C++ forbids comparison between pointer and integer [-fpermissive]
Error compiling.
```

The code for `getTimeStamp` is as simple as this:

```cpp
String getTimeStamp(){
  String result;
  Process time;
  time.begin("date");
  time.addParameter("+%D-%T");
  time.run();
  
  while(time.available() > 0){
    char c = time.read();
    if(c != "\n") result += c; //Offending line of code
  }
  
  return result;
}
```

This time around, Google did not help much. One thing it brought up is how mean geeks can be with newbies on forums and why I never liked to hang out in those. PaulS [seems][1] kinda cranky. But I digress, that is a subject for another post.

At the end, it took me a second to realize that the issue was the double quotes in the `if(c != "\n")` comparison.
So, instead it should have been singled quoted, like `if(c != '\n')`.


[1]:http://forum.arduino.cc/index.php?topic=210492.0
[2]:http://forum.arduino.cc/index.php?topic=268342.0#2
