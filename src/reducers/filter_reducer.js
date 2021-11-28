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
      let maxPrice = action.payload.map((p) => p.price)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      }
    case SET_GRIDVIEW:
      return { ...state, gridView: true }
    case SET_LISTVIEW:
      return { ...state, gridView: false }

    case UPDATE_SORT:
      return { ...state, sort: action.payload }
    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state
      let tempProducts = [...filteredProducts]
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price)
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price)
      }
      if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return { ...state, filteredProducts: tempProducts }

    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }

    case FILTER_PRODUCTS:
      const { allProducts } = state
      const { text, category, brand, size, price, shipping } = state.filters
      let initProducts = [...allProducts]
      if (text) {
        initProducts = initProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text)
        })
      }
      if (category !== 'all') {
        initProducts = initProducts.filter(
          (product) => product.category === category
        )
      }
      if (brand !== 'all') {
        initProducts = initProducts.filter((product) => product.brand === brand)
      }
      if (size !== 'all') {
        initProducts = initProducts.filter((product) =>
          product.size.includes(size)
        )
      }

      initProducts = initProducts.filter((product) => product.price <= price)

      if (shipping) {
        initProducts = initProducts.filter(
          (product) => product.shipping === true
        )
      }
      return { ...state, filteredProducts: initProducts }

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          brand: 'all',
          category: 'all',
          size: 'all',
          price: state.filters.maxPrice,
          shipping: false,
        },
      }

    default:
      return state
  }
}

export default filter_reducer
