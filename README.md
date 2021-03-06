# Designing with search data
Plugin for Adobe XD - A search engine running inside XD to easily populate your search application design.

## Concept
Easily access the different results of a search query to populate the design. No more faking autosuggests for partial queries.

Check out the blogpost "[Designing with search data](https://knowitlabs.no/designing-with-search-data-5c8b6b6d3fa1)".

![A mockup of the design in use](https://cdn-images-1.medium.com/max/2000/1*IHo4akTFtxOMqhkYsTS6VQ.png)

The actual application will be a bit different, but concept will be the same. [Check out a video of how it could work](https://youtu.be/A-rr1h-sjYw).

## Do you want this to happen?
Go vote for the [Leveldb / indexeddb for apps running inside XD](https://forums.adobexdplatform.com/t/leveldb-indexeddb-for-apps-running-inside-xd/241) feature request, over at Adobe XD Plugin Developers.

## Patch level-js
After `npm install`, add `var indexedDB` to ./node_modules/level-js/index.js so the start of the file is like this:

```JavaScript
/* global indexedDB */

'use strict'

var indexedDB
module.exports = Level
```

## Building it
Only working when loading the plugin (check developer console), but not in interaction with SceneGraph. That's next to fix.

```console
npm run-script deploy
```
