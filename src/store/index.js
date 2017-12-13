import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { mutations } from './mutation'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  cards: []
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

