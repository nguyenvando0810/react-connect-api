import React from 'react'
import ProductList from '../../components/ProductList/productList'
import Product from '../../components/Product/product'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductRequest, deleteProductRequest } from '../../actions/index'
class ProductListPage extends React.Component {
  constructor(props) {
    super(props)
    this.onDeleteProduct = this.onDeleteProduct.bind(this)
  }

  componentDidMount() {
    this.props.getProduct()
  }

  onDeleteProduct(id) {
    this.props.onDeleteProduct(id)
  }

  render() {
    let { products } = this.props

    return (
      <div>
        <h1 className="app-heading mt-3">Products Page</h1>
        <Link to="/products/add" className="btn btn-primary mt-4 mb-4"><i className="fa fa-envira mr-1" aria-hidden="true"></i> Add Product</Link>

        <ProductList>
          {this.showProductList(products)}
        </ProductList>
      </div>
    )
  }

  showProductList = (products) => {
    let result = null

    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            index={index}
            onDeleteProduct={this.onDeleteProduct}
          />
        )
      })
    }
    return result
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getProduct: () => {
      dispatch(getProductRequest())
    },

    onDeleteProduct:(id) => {
      dispatch(deleteProductRequest(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)