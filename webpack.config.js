const path = require('path')

module.exports =  [
  // Generating browser version of words'n'Numbers
  {
    mode: 'development',
    entry: './XD-webpackable.js',
    output: {
      path: path.resolve(__dirname, './'),
      filename: 'XD-webpacked.js'
      //library: 'wnn'
    },
    devtool: "none", // prevent webpack from using eval() on my module
  }
]