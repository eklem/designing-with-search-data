import encode from 'encoding-down'
import fii from 'fergies-inverted-index'
import levelup from 'levelup'
import memdown from 'memdown'
import si from './node_modules/search-index/dist/search-index.esm.js'


levelup(encode(memdown('myDB'), {
  valueEncoding: 'json'
}), (err, store) => {
  t.error(err)
  db = si({
    fii: fii({ store: store })
  })
})
