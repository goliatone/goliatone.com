---
title: "S3 Serve Static Website"
date: 2015-03-26
template: "post.hbs"
---


## Setup

You can use S3 to host a static Website using a regular bucket.

Create a bucket and give it a sensible name- domain of your site. Select the region where you want to create the Bucket.

You can then upload all static assets from your desktop.

Once you have uploaded all the files, select all files and set permissions to "Public Readable".

Select "Static Website Hosting" from the panel and click on **Enable website hosting**. Enter the **Index Document**- i.e. `index.html`- and the **Error Document** and save.

Once you do that, you can use the provided endpoint to browse the files:

>Endpoint: goliatone.com.s3-website-us-west-2.amazonaws.com


## Deploy


### Gzip
Gzip your components. Then remove the .gz extension leaving only the .css or .js extension. Upload the files to your bucket.

From your S3 dashboard, pull up the properties for the file that you just uploaded. Under the 'Metadata' header enter this information:

```
'content-type'      :  'text/css' or 'text/javascript'
'content-encoding'  :  'gzip'
```
