---
title: "Qp Php Email Subject Encoding"
date: 2013-06-19
template: "post.hbs"
---

http://en.wikipedia.org/wiki/Quoted-printable
http://stackoverflow.com/a/4389755/125083

quoted printable decode
http://php.net/manual/en/function.quoted-printable-encode.php

Not installed
http://us1.php.net/imap_8bit

=?ISO-8859-1?Q

http://www.php.net/manual/en/function.iconv-mime-encode.php
broken, 
Gagosian Gallery : DîâCRé 1999.2000
Subject: : =?UTF-8?Q?Gagosian=20Gallery=20?==?UTF-8?Q?:=20D=C3=83?= =?UTF-8?Q?=C2=AE=C3=83=C2=A2CR=C3=83=C2=A9=201999.200?==?UTF-8?Q?0?=


**FIX**
```
$preferences = array(
                "input-charset" => "UTF-8",
                "output-charset" => "ISO-8859-1",
                "line-length" => 76,
                "line-break-chars" => "\n"
            );
            $preferences["scheme"] = "Q";
            $encoded = iconv_mime_encode("Subject", $email->subject, $preferences);
```