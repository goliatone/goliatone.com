---
title: "Raspberry Pi Nodejs Open Zwave Md"
date: 2015-08-9
template: "post.hbs"
---

{\rtf1\ansi\ansicpg1252\cocoartf1348\cocoasubrtf170
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset0 Menlo-Bold;}
{\colortbl;\red255\green255\blue255;\red242\green242\blue242;\red47\green180\blue29;\red64\green11\blue217;
\red178\green178\blue178;\red20\green153\blue2;\red200\green20\blue201;\red133\green0\blue2;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural

\f0\fs26 \cf2 \cb0 \CocoaLigature0 sudo apt-get install make build-esential libudev-dev\
\
mkdir open-wave\
wget https://github.com/OpenZWave/open-zwave/archive/master.zip\
\
unzip master.zip \
\
cd open-wave\
\
make && sudo make install\
\
\
if node-gyp is acting up, just remove and install again.\
\
node i \'97save openzwave-shared\
\
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural

\f1\b \cf3 pi@beefypi
\f0\b0 \cf2  
\f1\b \cf4 ~/CODE/zwave-test $
\f0\b0 \cf2  npm i --save openzwave-shared\
\cf5 npm\cf2  \cf6 http\cf2  \cf7 GET\cf2  https://registry.npmjs.org/openzwave-shared\
\cf5 npm\cf2  \cf6 http\cf2  \cf7 304\cf2  https://registry.npmjs.org/openzwave-shared\
\cf5 npm\cf2  \cf6 http\cf2  \cf7 GET\cf2  https://registry.npmjs.org/nan\
\cf5 npm\cf2  \cf6 http\cf2  \cf7 304\cf2  https://registry.npmjs.org/nan\
\
> openzwave-shared@1.0.1 install /home/pi/CODE/zwave-test/node_modules/openzwave-shared\
> node-gyp rebuild\
\
make: Entering directory '/home/pi/CODE/zwave-test/node_modules/openzwave-shared/build'\
  CXX(target) Release/obj.target/openzwave_shared/src/openzwave.o\
In file included from ../src/openzwave.cc:18:0:\
../src/openzwave.hpp:30:21: fatal error: Manager.h: No such file or directory\
compilation terminated.\
openzwave_shared.target.mk:102: recipe for target 'Release/obj.target/openzwave_shared/src/openzwave.o' failed\
make: *** [Release/obj.target/openzwave_shared/src/openzwave.o] Error 1\
make: Leaving directory '/home/pi/CODE/zwave-test/node_modules/openzwave-shared/build'\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 build error\cf2  \
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 stack\cf2  Error: `make` failed with exit code: 2\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 stack\cf2      at ChildProcess.onExit (/opt/node-v0.10.28-linux-arm-pi/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:267:23)\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 stack\cf2      at ChildProcess.EventEmitter.emit (events.js:98:17)\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 stack\cf2      at Process.ChildProcess._handle.onexit (child_process.js:807:12)\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 System\cf2  Linux 3.18.7+\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 command\cf2  "node" "/opt/node-v0.10.28-linux-arm-pi/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 cwd\cf2  /home/pi/CODE/zwave-test/node_modules/openzwave-shared\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 node -v\cf2  v0.10.28\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 node-gyp -v\cf2  v0.13.0\
\cf5 gyp\cf2  \cf8 ERR!\cf2  \cf7 not ok\cf2  \
\cf5 npm\cf2  \cf8 ERR!\cf2  openzwave-shared@1.0.1 install: `node-gyp rebuild`\
\cf5 npm\cf2  \cf8 ERR!\cf2  Exit status 1\
\cf5 npm\cf2  \cf8 ERR!\cf2  \
\cf5 npm\cf2  \cf8 ERR!\cf2  Failed at the openzwave-shared@1.0.1 install script.\
\cf5 npm\cf2  \cf8 ERR!\cf2  This is most likely a problem with the openzwave-shared package,\
\cf5 npm\cf2  \cf8 ERR!\cf2  not with npm itself.\
\cf5 npm\cf2  \cf8 ERR!\cf2  Tell the author that this fails on your system:\
\cf5 npm\cf2  \cf8 ERR!\cf2      node-gyp rebuild\
\cf5 npm\cf2  \cf8 ERR!\cf2  You can get their info via:\
\cf5 npm\cf2  \cf8 ERR!\cf2      npm owner ls openzwave-shared\
\cf5 npm\cf2  \cf8 ERR!\cf2  There is likely additional logging output above.\
\
\cf5 npm\cf2  \cf8 ERR!\cf2  \cf7 System\cf2  Linux 3.18.7+\
\cf5 npm\cf2  \cf8 ERR!\cf2  \cf7 command\cf2  "/usr/bin/node" "/usr/bin/npm" "i" "--save" "openzwave-shared"\
\cf5 npm\cf2  \cf8 ERR!\cf2  \cf7 cwd\cf2  /home/pi/CODE/zwave-test\
\cf5 npm\cf2  \cf8 ERR!\cf2  \cf7 node -v\cf2  v0.10.28\
\cf5 npm\cf2  \cf8 ERR!\cf2  \cf7 npm -v\cf2  1.4.9\
\cf5 npm\cf2  \cf8 ERR!\cf2  \cf7 code\cf2  ELIFECYCLE\
\cf5 npm\cf2  \cf8 ERR!\cf2  \
\cf5 npm\cf2  \cf8 ERR!\cf2  Additional logging details can be found in:\
\cf5 npm\cf2  \cf8 ERR!\cf2      /home/pi/CODE/zwave-test/npm-debug.log\
\cf5 npm\cf2  \cf8 ERR!\cf2  \cf7 not ok\cf2  code 0\
\
\
\
\
After compiling `open-zwave` from source and installing the package, if I try to run `test.js` I get the following error:\
\
```\
node node_modules/openzwave-shared/test.js \
loading up RELEASE addon: /home/pi/CODE/zwave-test/node_modules/openzwave-shared/lib/../build/Release/openzwave_shared.node\
\
module.js:356\
  Module._extensions[extension](this, filename);\
                               ^\
Error: libopenzwave.so.1.3: cannot open shared object file: No such file or directory\
    at Module.load (module.js:356:32)\
    at Function.Module._load (module.js:312:12)\
    at Module.require (module.js:364:17)\
    at require (module.js:380:17)\
    at Object.<anonymous> (/home/pi/CODE/zwave-test/node_modules/openzwave-shared/lib/openzwave-shared.js:32:10)\
    at Module._compile (module.js:456:26)\
    at Object.Module._extensions..js (module.js:474:10)\
    at Module.load (module.js:356:32)\
    at Function.Module._load (module.js:312:12)\
    at Module.require (module.js:364:17)\
```\
\
The solution is to `sudo ldconfig`}