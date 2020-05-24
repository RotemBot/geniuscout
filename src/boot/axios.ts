import axios, { AxiosInstance } from 'axios'
import { boot } from 'quasar/wrappers'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
}

// @ts-ignore
export default boot(({ Vue }) => {
  Vue.prototype.$axios = axios
})
