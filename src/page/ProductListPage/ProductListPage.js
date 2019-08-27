import React from 'react';
import ProductList from '../../components/ProductList/productList'
import Product from '../../components/Product/product'
import { connect } from 'react-redux'
import callApi from '../../utils/callApi'
import { Link } from 'react-router-dom'

class ProductListPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    callApi('products', 'GET', null).then(res => {
      this.setState({
        products: [...res.data]
      })
    })
  }

  render() {
    // let { products } = this.props
    let { products } = this.state
    return (
      <div className="container">
        <Link to="/products/add" className="btn btn-primary mt-4 mb-4"> Add Product</Link>

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

export default connect(mapStateToProps, null)(ProductListPage)