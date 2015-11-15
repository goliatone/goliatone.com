---
title: "Mac Osx Simple Webview Application"
date: 2014-10-21
template: "post.hbs"
---

# Simple Mac OSX application with WebView

Create a new project in Xcode: 
- Select _OS X_ > _Application_ > _Cocoa Application_

After you have created the project, select the app delegate header file.


### Add WebKit framework
Go to target settings, *General* tab. Find *Linked Frameworks and Libraries*, click plus sing button and select *WebKit.framework*.

### Add WebView
Select application window, and then add a Web View instance.