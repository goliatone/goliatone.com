# goliatone.com

Source code for goliatone.com, WIP!


node deploy.js -d ./site/ -b 'goliatone.com' -c ./.secrets.json

### TODO
- Include assets from template metadata
- Default templates per collections: post => post.hbs
- Refactor CSS, move style from body to wrapper
- slug: Figure out how to handle special characters
- Handlebars helper: slice, filter out by current title

BUGS:
- feed gets included inside permalink folders
- longDate: displayed hours do not match this universe
- feed: archive links do not point to site with full URL!!

## License
Copyright (c) 2015 goliatone  
Licensed under the MIT license.
