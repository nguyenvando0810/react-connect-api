import * as types from '../constants/actionType'

const initialState = []

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST:
      state = action.products
      return [...state]

    case types.DELETE_PRODUCT:
      let newProducts = state.filter((product) => product.id !== action.id)
      state = newProducts
      return [...state]

    case types.ADD_PRODUCT:
      state = [...state, action.product]
      return [...state]

    case types.UPDATE_PRODUCT:
      let indexItemEditing = state.findIndex(product => product.id === action.product.id)
      state[indexItemEditing] = action.product
      return [...state]

    default:
      return [...state]
  }
}

export default products
