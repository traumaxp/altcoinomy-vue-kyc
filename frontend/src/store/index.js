import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import { FeathersVuex } from '../feathers-client'

// import example from './module-example'

Vue.use(Vuex)
Vue.use(FeathersVuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
import users from './services/users'
export default new Vuex.Store({
  strict: true,
  plugins: [
    // if you're using require.context, spread the plugins into the array.
    // users, // if you're manually importing, just add the plugins into the array, like this
    users
  ],
  state,
  mutations: {
  },
  actions: {
  }
  // enable strict mode (adds overhead!)
  // for dev mode only
})
