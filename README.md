# goliatone.com

Source code for goliatone.com, WIP!

```
./tasks/compress
./tasks/s3up -d ./deploy/ -b 'goliatone.com' -c ./.secrets.json
```

### TODO
- Include assets from template metadata
- Default templates per collections: post => post.hbs
- ~~Refactor CSS, move style from body to wrapper~~
- slug: Figure out how to handle special characters
- Handlebars helper: slice, filter out by current title
- Asset pipeline: pick up CSS from content and compress, same with JS
- instaG: do it for realz!
- fix tags in tag archive page, link same as in actual tag page.

BUGS:
- feed gets included inside permalink folders
- longDate: displayed hours do not match this universe
- feed: archive links do not point to site with full URL!!
- Assets should be moved from public to site, so that favicon is in root.

## License
Copyright (c) 2015 goliatone  
Licensed under the MIT license.
