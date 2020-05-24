// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'quasar/wrappers' {
  const { boot, configure, preFetch, route, store } = require('../node_modules/quasar/wrappers')
  export { boot, configure, preFetch, route, store }
}

declare module 'country-json'
