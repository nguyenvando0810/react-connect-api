// import * as type from '../constants/actionType'

const initialState = [{
    id: 1,
    name: 'AA',
    price: 1000,
    status: true
  },
  {
    id: 2,
    name: 'BB',
    price: 1000,
    status: false
  }
]

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
}

export default products