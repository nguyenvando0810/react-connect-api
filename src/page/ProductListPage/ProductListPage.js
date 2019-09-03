import React from 'react'
import ProductList from '../../components/ProductList/productList'
import Product from '../../components/Product/product'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductRequest, deleteProductRequest } from '../../actions/index'
import ModalComfirm from './../../components/ModalConfirm/modalConfirm'
class ProductListPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      idDelete: ''
    }

    this.onDeleteProduct = this.onDeleteProduct.bind(this)
    this.getIdProductDelete = this.getIdProductDelete.bind(this)
  }

  componentDidMount() {
    this.props.getProduct()
  }

  onDeleteProduct(id) {
    this.props.onDeleteProduct(id)
  }

  getIdProductDelete(id) {
    this.setState({
      idDelete: id
    })
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

        <ModalComfirm id={this.state.idDelete} onDeleteProduct={this.onDeleteProduct} />
      </div>
    )
  }

  showProductList = (products) => {
    if (products.length > 0) {
      return products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            index={index}
            getIdProductDelete={this.getIdProductDelete}
          />
        )
      })
    }
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