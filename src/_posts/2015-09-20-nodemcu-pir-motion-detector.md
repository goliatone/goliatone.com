---
title: "Nodemcu Pir Motion Detector"
date: 2015-09-19
template: "post.hbs"
---


The PIR would read garbage, totally random values. The issue is that although the logic is 3.3v it has to be powered with at least 5v.
The trickiest part was to figure out how to power the PIR from a NodeMCU which only has 3.3v
Turns out some PIR have a voltage regulator that brings 5 to 3


http://kavacky.lv/bypassing-sen-08630-pir-motion-sensors-voltage-regulator-to-work-with-3-3-v

http://techgurka.blogspot.com/2013/05/cheap-pyroelectric-infrared-pir-motion.html 
