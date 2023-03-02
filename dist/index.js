
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vam-sdk.cjs.production.min.js')
} else {
  module.exports = require('./vam-sdk.cjs.development.js')
}
