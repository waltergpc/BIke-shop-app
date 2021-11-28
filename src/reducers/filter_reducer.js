import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
      }
    case SET_GRIDVIEW:
      return { ...state, gridView: true }
    case SET_LISTVIEW:
      return { ...state, gridView: false }

    case UPDATE_SORT:
      return { ...state, sort: action.payload }
    default:
      return state
  }
}

export default filter_reducer
