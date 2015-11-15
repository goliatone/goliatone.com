---
title: "Is Not a Bug Its a Feature"
date: 2014-01-23
template: "post.hbs"
---

## It's not a bug, it's a feature

<img src="http://2.bp.blogspot.com/_Ze5Xm5fW-4o/TUnUBt6ADUI/AAAAAAAABJA/2WGSLTNK1K4/s1600/broken-link-image-gif.jpg" alt="Broken link" height="120px" width="120px">

So, I don't remember when was the first time I ever heard that phrase. I always felt that it was meant to be a cheap developer excuse and I just left it at that.

Let me tell you a little history. 

I got thrown into a legacy project. Client wants some updates, the original developer is unavailable, and apparently figuring out the backlog took half of the alloted time so we have tight deadline and we are already way behind _schedule_. 
One of the features they requested was optimization.
The application was a fairly complex CMS for an art gallery. There is a section that deals with art works. It had a paginated grid view, loading 20 items per page.

> It's too slow!! It needs to load faster. Faster!! And it needs to show more records. More records!!

Part of the issue was an over jealous and über-complicated permission system that dictated rules per role, user, work, price, status and more criteria.

Indeed, the page took between three and four and a half seconds to load. 

One of the issues I found was that the grid made over 2,300 `SQL` request per page. I implemented custom renders for the grid rows, cells and build optimized queries. Implemented a cache. In all, the query count per page went down to 112... but it still took around 2 seconds to render. Not acceptable.

Having done as much as it could be done in the back end given the circumstances- time and budget- I moved to the front end.

Each row displayed an image of the art work. Some entries without an image displayed a default image with the logo of the gallery, and other entries displayed the browser's broken link image.

Images had another complex set of permission rules. Apparently, each image request was to a service that processed the request, did a permission check, created a temp image, gave it an expire token, and then sent back the file output. The idea behind was to prevent users from sending out links to images, and if they sent a link, and the person who received the link got through all IP filters, authorization request and extra security hoops, they would most likely find nothing, since the token would have been expired and the image would not have been delivered.

It sounds complicated, but actually my description is an over simplification. 

You can figure that it did indeed take a lot of time to make the round trip.

So, I did what everybody in their sane mind would do. I made the image loading asynchronous, so that each image would not block the rest of the content.
I wrote a JavaScript library to handle this. All items had an `image` tag with a link to the gallery logo. Then, after loading the image it would swap the placeholder with the real image. 

All in all, page load under a second. Big win. Move on. More features. We ship, client is super happy with all the new features.

Well, not really. 

A few weeks go by, and the client comes back telling us that the CMS is broken.

One user group, archivist, would create a record for a new piece of art with all it's technical description and literature. Another user group would get notified that a new record was created and would go to their image archive and pull whatever images they had of the work. Most of the records they had images in house. Some records did not have associated images. Others needed a picture but they had no images in house, so yet another user group had to take note of those records missing images and make sure that an image was produced. Once they had an image, they would go back, edit the record and update it with the new image.

And guess what, that convoluted process relied on... the broken link image!

Knowing that _feature_, the fix was rather simple. If no image was found, another place holder image was used. An image of a broken link image.





