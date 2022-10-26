import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    setup:[]
  },
  mutations: {
    setup(state, payload) {
      state.setup.push(payload)
    }
  }
})

export default store
