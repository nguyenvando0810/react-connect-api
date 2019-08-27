import { combineReducers } from 'redux'
import products from './product'
import itemEditing from './productEditing'

const reducer = combineReducers({
  products,
  itemEditing
})

export default reducer