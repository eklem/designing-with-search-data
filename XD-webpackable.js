// npx webpack-cli --devtool false --mode development XD-webpackable.js -o XD-webpacked.js

import encode from 'encoding-down'
import fii from 'fergies-inverted-index'
import levelup from 'levelup'
import memdown from 'memdown'
import si from 'search-index/dist/search-index.cjs.js'


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
    title: 'quite a cool document',
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

levelup(encode(memdown('myDB'), {
  valueEncoding: 'json'
}), (err, store) => {
  if (err) return console.error(err)
  let db = si({
    fii: fii({ store: store })
  })
  db.PUT(data)
    .then(function(message) {
      console.log('db.PUT: ' + message)
    })
    .then(function() {
      db.SEARCH('title:something')
      .then(function(results) {
        console.log('searching query \'title:something\', results: \n' + JSON.stringify(results))
      })
    })
    .catch(function (err) {
      console.log('Error while db.PUT:')
      console.error(err)
    })
})

function populateDesign (selection) {
  console.log("Plugin command is running, now with text!");
  levelup(encode(memdown('myDB'), {
      valueEncoding: 'json'
    }), (err, store) => {
      if (err) return console.error(err)
      let db = si({
        fii: fii({ store: store })
      })
      db.PUT(dataIn)
        .then(function(message) {
          console.log('db.PUT: ' + message)
        })
        .then(function() {
          db.SEARCH('title:something')
          .then(function(dataOut) {
            console.log('searching query \'title:something\', results: \n' + JSON.stringify(results))
            let repeatGrid = selection.items[0].parent.parent;
            let selectedTextNode = selection.items[0];
            repeatGrid.attachTextDataSeries(selectedTextNode, dataOut);          
          })
        })
        .catch(function (err) {
          console.log('Error while db.PUT:')
          console.error(err)
        })
    })
  }