'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://www.easy-mock.com/mock/5c8c5940ee611359cdbb4830/ruidun_system"'
  BASE_API: '"http://localhost:7300/mock/5c8f51825a27b10020277ccc/ruidun_system"'
  // BASE_API: '"http://localhost:9080"',
})
