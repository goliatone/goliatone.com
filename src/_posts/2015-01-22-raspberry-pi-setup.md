---
title: "Raspberry Pi Setup"
date: 2015-01-21
template: "post.hbs"
---


## raspberry pi

remove wolfram

```terminal
sudo apt-get purge wolfram-engine
```

install node:

```terminal
apt-get install nodejs
```

Install `cmake`:
```terminal 
$ sudo apt-get install cmake
```

Installing `raspicam`:

- Download from [SourceForge][raspicam]
- `tar xvzf raspicam-0.1.1.zip`
- `cd raspicam-0.1.1 `
- `mkdir build`
- `cd build`
- `cmake ..`

Output should be something in the lines of:

```
-- The C compiler identification is GNU 4.6.3
-- The CXX compiler identification is GNU 4.6.3
-- Check for working C compiler: /usr/bin/gcc
-- Check for working C compiler: /usr/bin/gcc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++
-- Check for working CXX compiler: /usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- -------------------------------------------------------------------------------
-- GNU COMPILER
-- -------------------------------------------------------------------------------
-- Adding cv library
-- 
-- -------------------------------------------------------------------------------
-- General configuration for raspicam 0.1.0
-- -------------------------------------------------------------------------------
-- 
    Built as dynamic libs?:ON
    Compiler:/usr/bin/c++
-- C++ flags (Release):        -std=c++0x -Wl,--no-as-needed  -Wall -ffunction-sections   -fomit-frame-pointer -O2 -ffast-math -DNDEBUG -mcpu=arm1176jzf-s  -mfpu=vfp -mfloat-abi=hard -ftree-vectorize  -lpthread
-- C++ flags (Debug):          -std=c++0x -Wl,--no-as-needed  -Wall -ffunction-sections  -g3 -O0 -DDEBUG -D_DEBUG -W -Wextra -Wno-return-type  -lpthread
-- CMAKE_CXX_FLAGS:          -std=c++0x -Wl,--no-as-needed  -Wall -ffunction-sections 
-- CMAKE_BINARY_DIR:         /home/pi/camcv/raspicam/raspicam-0.1.1/build
-- 
-- CMAKE_SYSTEM_PROCESSOR = armv6l
-- BUILD_SHARED_LIBS = ON
-- BUILD_UTILS = ON
-- CMAKE_INSTALL_PREFIX = /usr/local
-- CMAKE_BUILD_TYPE = Release
-- CMAKE_MODULE_PATH = /usr/local/lib/cmake/;/usr/lib/cmake
-- 
-- CREATE OPENCV MODULE=1
-- CMAKE_INSTALL_PREFIX=/usr/local
-- REQUIRED_LIBRARIES=/opt/vc/lib/libmmal_core.so;/opt/vc/lib/libmmal_util.so;/opt/vc/lib/libmmal.so
-- 
-- 
-- Change a value with: cmake -D<Variable>=<Value>
-- 
-- Configuring done
-- Generating done
-- Build files have been written to: /home/pi/camcv/raspicam/raspicam-0.1.1/build
```


If you had opencv installed you should see:
>-- CREATE OPENCV MODULE=1

Last step, compile:
- `make`
- `sudo make install`
- `sudo ldconfig`

[raspicam]: https://sourceforge.net/projects/raspicam/files/?


To setup a VCN server/client:
http://gettingstartedwithraspberrypi.tumblr.com/post/24142374137/setting-up-a-vnc-server
start server
`tightvncserver`