---
title: "Aws Dynamodb Gotchas"
date: 2015-07-24
template: "post.hbs"
---



Things to consider:

Item size:
>Cannot exceed 400 KB which includes both attribute name binary length (UTF-8 length) and attribute value lengths (again binary length). The attribute name counts towards the size limit. For example, consider an item with two attributes: one attribute named "shirt-color" with value "R" and another attribute named "shirt-size" with value "M". The total size of that item is 23 bytes.

BatchGetItem item maximum per operation
>Up to 100 items retrieved. The total size of all the items retrieved cannot exceed 16 MB.

BatchWriteItem item maximum per operation
>Up to 25 PutItem or DeleteItem operations per BatchWriteItem call. The total size of all the items written cannot exceed 16 MB.

Redshift vs DynamoDB:

>DynamoDB table names can contain up to 255 characters, including '.' (dot) and '-' (dash) characters, and are case-sensitive. Amazon Redshift table names are limited to 127 characters, cannot contain dots or dashes and are not case-sensitive. In addition, table names cannot conflict with any Amazon Redshift reserved words.

[Loading Data From DynamoDB into Redshift][1]


[1]: http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/RedshiftforDynamoDB.html
