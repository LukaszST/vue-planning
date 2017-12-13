import * as types from './mutation-types'

export const fetchCards = ({commit}) => {
  fetch('http://pokerplanning.dev/api/available-scrum-points', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.FETCH_CARDS, json))
}