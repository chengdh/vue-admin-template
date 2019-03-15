'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  BASE_API: '"https://www.easy-mock.com/mock/5c832dabe0e0f75c246237a9/ruidun_system"'
  // BASE_API: '"http://localhost:9080"',
})
