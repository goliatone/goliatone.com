---
title: "Javascript Hate It Aws Sdk"
date: 2014-07-9
template: "post.hbs"
---

## JavaScript: Love it or Hate it

I love JavaScript because **I** can do whatever **I** want with it. 
I have JavaScript because _you_ can do whatever _you_ want it it.

### Hate
Everybody can use it. Most developers miss use it.

Here, example from AWS JavaScript SDK:

```javascript
<div id="status"></div>
<ul id="objects"></ul>

<script type="text/javascript">
  var bucket = new AWS.S3({params: {Bucket: 'myBucket'}});
  bucket.listObjects(function (err, data) {
    if (err) {
      document.getElementById('status').innerHTML =
        'Could not load objects from S3';
    } else {
      document.getElementById('status').innerHTML =
        'Loaded ' + data.Contents.length + ' items from S3';
      for (var i = 0; i < data.Contents.length; i++) {
        document.getElementById('objects').innerHTML +=
          '<li>' + data.Contents[i].Key + '</li>';
      }
    }
  });
</script>
```