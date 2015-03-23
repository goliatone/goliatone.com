---
title: "Flex AS3 AMFPHP encoding issues"
date: 2011-08-10
description: "Flex as3 amfphp encoding issues"
---
I'm working on a project that uses AMFPHP and that has two clients; a Flex AIR back-end client, and a Flash front-end client.

Im experiencing issues with class mapping from AMFPHP to AS3 on the Flex client only, getting the following error:

    TypeError: Error #1034: Type Coercion failed: cannot convert []@7dd1ba1 to xxx

The flash client works as expected and both ends use the same VO classes. Everything should work as expected since PHP and AS3 VO's are mapped, AS3 VO's are registered. 

Digging around, I narrowed the issue down to this:

 - If the service class accessing AMFPHP uses flex's `RemoteObject` there are no conversion issues.
 - However, a custom class using a `NetConnection` will error out.

To fix the issue, I had to set the `objectEncoding` of the `NetConnection` to AMF3, and in the AMFPHP side, I had to place `$GLOBALS['amfphp']['encoding'] = 'amf3';` on the service's class constructor to make it work.
