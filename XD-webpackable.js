// npm install
// add 'var indexedDB' to ./node_modules/level-js/index.js
// npx webpack-cli --devtool false --mode development XD-webpackable.js -o XD-webpacked.js
// cp -r ../designing-with-search-data [XD plugin develp folder]

import encode from 'encoding-down'
import fii from 'fergies-inverted-index'
import levelup from 'levelup'
import memdown from 'memdown'
import si from 'search-index/dist/search-index.esm.js'


const data = [
  {
    _id: 'a',
    title: 'quite a cool document',
    body: {
      text: 'this document is really cool cool cool',
      metadata: 'coolness documentness'
    },
    importantNumber: 5000
  },
  {
    _id: 'b',
    title: 'quite a cool document too',
    body: {
      text: 'this document is really cool bananas',
      metadata: 'coolness documentness'
    },
    importantNumber: 500
  },
  {
    _id: 'c',
    title: 'something different',
    body: {
      text: 'something totally different',
      metadata: 'coolness documentness'
    },
    importantNumber: 200
  }
]

// Initiate search-index
levelup(encode(memdown('myDB'), {
  valueEncoding: 'json'
}), (err, store) => {
  if (err) return console.error(err)
  let db = si({
    fii: fii({ store: store })
  })
  // Index data
  db.PUT(data)
    .then(function(message) {
      console.log('db.PUT: ' + message)
    })
    .then(function() {
      // Do a search for titles containing 'cool'
      db.SEARCH('title:cool')
      .then(function(results) {
        let dataOut = []
        console.log('Searching query \'title:cool\', results: \n' + JSON.stringify(results))
        results.forEach(function(result) {
          dataOut.push(result.obj.title)
        })
        // Setup define repeatergrid
        console.log('search result titles: ' + dataOut)
        let repeatGrid = selection.items[0].parent.parent;
        let selectedTextNode = selection.items[0];
        // Populate repeaterGrid with search result titles
        repeatGrid.attachTextDataSeries(selectedTextNode, dataOut);
      })
    })
    .catch(function (err) {
      console.log('Error while db.PUT:')
      console.error(err)
    })
})

function populateSearchDesign (selection) {
  console.log("populateSearchDesign is running");
  levelup(encode(memdown('myDB'), {
      valueEncoding: 'json'
    }), (err, store) => {
      if (err) return console.error(err)
      let db = si({
        fii: fii({ store: store })
      })
      // Index data
      db.PUT(dataIn)
        .then(function(message) {
          console.log('db.PUT: ' + message)
        })
        .then(function() {
          // Do a search for titles containing 'cool'
          db.SEARCH('title:cool')
          .then(function(results) {
            let dataOut = []
            console.log('Searching query \'title:cool\', results: \n' + JSON.stringify(results))
            results.forEach(function(result) {
              dataOut.push(result.obj.title)
            })
            // Setup define repeatergrid
            console.log('search result titles: ' + dataOut)
            let repeatGrid = selection.items[0].parent.parent;
            let selectedTextNode = selection.items[0];
            // Populate repeaterGrid with search result titles
            repeatGrid.attachTextDataSeries(selectedTextNode, dataOut);
          })
        })
        .catch(function (err) {
          console.log('Error while db.PUT:')
          console.error(err)
        })
    })
  }
