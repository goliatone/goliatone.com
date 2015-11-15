---
title: "Mac Osx Reset Admin Password"
date: 2014-05-4
template: "post.hbs"
---

## MacOSX: Reset admin password

Let's say that someone gained access to your computer and changed your main user's password as a prank. You notice when can't `sudo` and when you type in your old password, it does not work.

Sadly, its actually really easy to give yourself a new password.

Reboot your mac and login as Single User by holding `command+s` on startup.
You will be on a terminal screen, where you need to execute the following commands, assuming your username is `peperone`:
`mount -uw /`
`launchctl load /System/Library/LaunchDaemons/com.apple.opendirectoryd.plist`
`passwd peperone` this will prompt you to type your new password, twice.
`reboot`

And, that is all.