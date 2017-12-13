import * as types from './mutation-types'

export const mutations = {
  [types.FETCH_CARDS] (state, payload) {
    state.cards.push(payload)
  }
}