import { createContext, useContext, useReducer } from 'react'
import reducer from '../utils/reducer'

import data from '../data'

export const AppContext = createContext()

const initialState = {
  loading: false,
  bagNrItems: 0,
  totalMoney: 0,
  cart: data,
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  )
}
