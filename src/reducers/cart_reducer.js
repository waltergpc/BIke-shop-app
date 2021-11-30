import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, size, amount, product } = action.payload
      const tempItem = state.cart.find((item) => item.id === id + size)
      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item.id === id + size) {
            let newAmount = item.amount + amount
            if (newAmount > item.max) {
              newAmount = item.max
            }
            return { ...item, amount: newAmount }
          } else {
            return item
          }
        })

        return { ...state, cart: tempCart }
      } else {
        const newItem = {
          id: id + size,
          name: product.name,
          size,
          amount,
          image: product.images[0],
          price: product.price,
          max: product.quantity,
        }
        return { ...state, cart: [...state.cart, newItem] }
      }

    case REMOVE_CART_ITEM:
      const deletedCart = state.cart.filter(
        (item) => item.id !== action.payload
      )
      return { ...state, cart: deletedCart }

    case CLEAR_CART:
      return { ...state, cart: [] }

    case TOGGLE_CART_ITEM_AMOUNT:
      const toggledCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.value === 'inc') {
            let newAmount = item.amount + 1
            if (newAmount > item.max) {
              newAmount = item.max
            }
            return { ...item, amount: newAmount }
          }
          if (action.payload.value === 'dec') {
            let newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }
            return { ...item, amount: newAmount }
          }
        }
        return item
      })

      return { ...state, cart: toggledCart }

    case COUNT_CART_TOTALS:
      const { totalItems, totalAmount } = state.cart.reduce(
        (accum, item) => {
          accum.totalItems += item.amount
          accum.totalAmount += item.price * item.amount
          return accum
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      )
      return { ...state, totalAmount, totalItems }

    default:
      return state
  }
}

export default cart_reducer
