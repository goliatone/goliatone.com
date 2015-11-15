---
title: "Omnikey 5427 Mac Osx"
date: 2015-09-5
template: "post.hbs"
---


The HID OMNIKEY 5427 CK is a PC/SC (CCID) compliant SmartCard reader.

http://www.instructables.com/id/USB-RFID-Python-Pub-Sub-MQTT/?ALLSTEPS

https://github.com/santigimeno/node-pcsclite
https://github.com/goodotcom/rfid-reader-http


http://pyscard.sourceforge.net/user-guide.html#pyscard-user-guide
http://stackoverflow.com/questions/22348295/read-an-unique-id-from-rfid-card-in-python?rq=1

http://tech.springcard.com/guides/pcsc-unix-with-pcsclite/

Mac
```
brew install pcsc-lite
```

`pcsctest` only shows one reader:

```
MUSCLE PC/SC Lite Test Program

Testing SCardEstablishContext    : Command successful.
Testing SCardGetStatusChange
Please insert a working reader   : Command successful.
Testing SCardListReaders         : Command successful.
Reader 01: HID OMNIKEY 5427 CK
Enter the reader number          :
```
From what I can tell, “Reader 01″ is for regular SmartCard. We want "Reader 02" which is RFID.


Debian, rpi:
```
apt-get install libpcsclite1 libpcsclite-dev
```


http://python-pcsclite.sourceforge.net/



driver HID
http://www.hidglobal.com/drivers/20384
does not seem to support 54527, pcsctest shows nothing now :/

rpi:
sudo pip install pyscard


http://fatsquirrel.org/oldfartsalmanac/random/macos-x-with-rfid-smartcards-notes/
http://pydoc.net/Python/omnikey2ivy/0.1.2/omnikey2ivy.RFIDIOt.RFIDIOt/
