import { REQUEST_PRODUCT, RECEIVE_PRODUCT } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  productInfo: [],
}

export default function productInfo(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCT:
      return {...state, isFetching: true}
    case RECEIVE_PRODUCT:
      return {...state, isFetching: false, productInfo: action.payload}
    default:
      return state
  }
}