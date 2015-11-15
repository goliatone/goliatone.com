---
title: "Wolf Cms Content Not Found 404"
date: 2014-10-17
template: "post.hbs"
---

## Wolf CMS 404 Error page

I have a legacy website that runs on the Wolf CMS. I got an email from the owner informing me that suddenly the website was unaccessible and rendering the following error message:

```
Content Not Found (404)

The content you requested was not found. It may have been deleted or you may have entered an incorrect address.

Please return to the home page to view the main navigation.
```

Apparently, Wolf CMS shows the reported error if the PDO extension is not installed. During the installation process it should display a message similar to the following:

>Wolf CMS requires PDO support which was not detected. Terminating.

The weird thing is that the website had been running for over a year. Digging a little bit, turns out that the sys admin had recently updated the server and PHP versions. 

Checking with `phpinfo` I saw that PHP had been compiled with `'--disable-pdo'`.

To solve this you have to compile PHP with the `--with-pdo-mysql` flag.
Then ensure that the following lines are present in `php.ini`:

```
extension=pdo.so
extension=pdo_mysql.so
```

