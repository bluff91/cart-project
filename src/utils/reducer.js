const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { bagNrItems: 0, cart: [] }

    case 'REMOVE_ITEM':
      console.log(action.payload)
      return {
        ...state,
        bagNrItems: state.bagNrItems - 1,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }

    case 'INCREASE':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 }
          }
          return item
        }),
      }

    case 'DECREASE':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 }
          }
          return item
        }),
      }
    default:
      return state
  }
}

export default reducer
