import * as types from '../constants/actionType'

const initialState = {
  id: '',
  name: '',
  price: '',
  status: ''
}

const itemEditingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT:
      state = action.product
      return state

    default:
      return state
  }
}

export default itemEditingReducer