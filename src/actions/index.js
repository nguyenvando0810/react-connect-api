import * as types from '../constants/actionType'
import callApi from '../utils/callApi'

//Fetch list
export const getProductRequest = () => {
  return (dispatch) => {
    return callApi('products', 'GET', null).then(res => {
      dispatch(getProduct(res.data))
    })
  }
}

export const getProduct = (products) => {
  return {
    type: types.GET_LIST,
    products
  }
}

//Delete product
export const deleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, 'DELETE', null).then(res => {
      dispatch(deleteProduct(id))
    })
  }
}

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id
  }
}

//Add product
export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product
  }
}

export const addProductRequest = (product) => {
  return (dispatch) => {
    return callApi('products', 'POST', product).then(res => {
      dispatch(addProduct(product))
    })
  }
}

//Get product edit
export const editProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, 'GET', null).then(res => {
      return dispatch(editProduct(res.data))
    })
  }
}

export const editProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product
  }
}

//Update Product
export const updateProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, 'PUT', product).then(res => {
      return dispatch(updateProduct(res.data))
    })
  }
}

export const updateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product
  }
}
