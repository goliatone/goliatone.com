---
title: "Arduino Yun Web Server"
date: 2015-03-23
template: "post.hbs"
---


The cool thing about the Yún is that it comes with a built in web server.

**NOTE**:
At this point, you should know how to connect to your Yún using WiFi and through your server. Also, you should have expanded its memory. [LINK TO PREVIOUS POSTS]

An Arduino sketch consists on a folder with the sketch's name and a file with an **ino** extension.

When you make a sketch with the Arduino Yún, if you create a **www** folder inside your sketch folder- next to the **ino** file- any additional content inside will be copied on the Linino side in the /sd/arduino/www/<sketch_name>.
As long as you are connected to the Arduino over the network port, the IDE will do this for you.

Then, the contents are accessible via browser in the url:
```
http://<board_name>.local/sd/<sketch_name>
```
So, I named one of my Yún goluino. And I created a sketch with the name *yun_test*, then after uploading the sketch, the contents would be accessible at:
```
http://goluino.local/sd/yun_test
```



```cpp
#include <Bridge.h>
#include <YunServer.h>
#include <YunClient.h>

YunServer server;

void setup() {
  // put your setup code here, to run once:
  Bridge.begin();
  server.listenOnLocalhost();
  server.begin();
  
}

void loop() {
  // put your main code here, to run repeatedly:
  YunClient client = server.accept();
  
  if(client){
    String cmd = client.readString();
    cmd.trim();
    if(cmd == "temperature"){
      client.print(cmd);
    }
    client.stop();
  }
  delay(50);
}
```