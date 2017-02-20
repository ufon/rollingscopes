import fetch from 'isomorphic-fetch'

import { REQUEST_CATEGORY, RECEIVE_CATEGORY, SELECT_CATEGORY } from '../constants/ActionTypes';

function requestCategory(id) {
  return {
    type: REQUEST_CATEGORY,
    id: id
  }
}

function receiveCategory(json) {
  return {
    type: RECEIVE_CATEGORY,
    payload: json.items,
    page: json.page,
    receivedAt: Date.now()
  }
}

export default function fetchCategory(id) {
  return dispatch => {
    dispatch(requestCategory(id));
    return fetch('https://ufon.herokuapp.com/ip.php')
      .then(response => response.json())
      .then(json => dispatch(receiveCategory(json.models)))
  }
}
