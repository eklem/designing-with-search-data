// npx webpack-cli --mode development main-webpackable.js -o main-webpacked.js

import encode from 'encoding-down'
import fii from 'fergies-inverted-index'
import levelup from 'levelup'
import memdown from 'memdown'
import si from './node_modules/search-index/dist/search-index.esm.js'


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