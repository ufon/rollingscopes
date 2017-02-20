import { REQUEST_CATEGORY, RECEIVE_CATEGORY, SELECT_CATEGORY } from '../constants/ActionTypes';

const initialState = {
    id: 0,
    isFetching: false,
    items: [],
    page: 1,
    nextPageUrl: '',
}

export default function categoryList(state = initialState, action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                id: action.id
            };
        case REQUEST_CATEGORY:
            return {
                ...state,
                id: action.id,
                isFetching: true
            };
        case RECEIVE_CATEGORY:
            return { 
                ...state, 
                isFetching: false, 
                items: action.payload,
                page: action.page 
            };
        default:
            return state
    }
}