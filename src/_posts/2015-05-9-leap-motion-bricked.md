---
title: "Leap Motion Bricked"
date: 2015-05-9
template: "post.hbs"
---

I've had a leap motion for a while now, and recently a project surged for which the Leap would be perfect.

Had not played with it for a bit, so when I opened the controller it asked to upgrade the firmware. After that the Leap motion stopped to respond.

I was a V.06.05 board version.

This is what I had to do to fix it:

Download the firmware reset tool from this [link][l1]

```
mkdir /tmp/lm
cp -r /Volumes/LM_FirmwareReset_Mac/ /tmp/lm
cd /tmp/lm
chmod 775 FirmwareReset
./FirmwareReset
```

Then just follow the instructions:

```
Leap Motion Firmware Reset tool
===============================

           ____________________________________________________
          |                                                    |
          |  Please select "Pause Tracking" in the Leap        |
          |  Motion Tray Icon.                                 |
          |                                                    |
          |              Press Enter to continue.              |
          |____________________________________________________|


Please plug in your Leap Motion Controller.


The entire process should take less than a couple of minutes.

Restoring firmware (Part 1/2)
   ... Done
Restoring firmware (Part 2/2)
   ... Done
Firmware update succeeded. Press Enter to quit.

After quitting, you must unplug and replug your Leap Motion Controller.
Then, select "Resume Tracking" in the Leap Motion tray icon.
```

Happy leaping!


[l1]: https://leapmotion.app.box.com/s/x0por7h9ypltc2rtr5ez


