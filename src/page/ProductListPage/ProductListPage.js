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
      idDelete: '',
      // visibleItem: 5,
      currentPage: 1,
      todosPerPage: 10
    }

    this.onDeleteProduct = this.onDeleteProduct.bind(this)
    this.getIdProductDelete = this.getIdProductDelete.bind(this)
    this.handleClickPageNumbers = this.handleClickPageNumbers.bind(this)
    this.handleClickPageNumbersPrev = this.handleClickPageNumbersPrev.bind(this)
    this.handleClickPageNumbersNext = this.handleClickPageNumbersNext.bind(this)
    // this.loadMore = this.loadMore.bind(this)
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

  // loadMore() {
  //   this.setState((state) => ({
  //     visibleItem: state.visibleItem + 5
  //   }))
  // }

  handleClickPageNumbers(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  handleClickPageNumbersPrev() {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({
        currentPage: state.currentPage - 1
      }));
    }
  }

  handleClickPageNumbersNext() {
    if (this.state.currentPage < this.props.products.length / this.state.todosPerPage) {
      this.setState((state) => ({
        currentPage: state.currentPage + 1
      }));
    }
  }

  render() {
    let { products } = this.props
    let { currentPage, todosPerPage } = this.state

    return (
      <div className="products">
        <h1 className="app-heading mt-3">Products Page</h1>
        <Link to="/products/add" className="btn btn-primary mt-4 mb-4"><i className="fa fa-envira mr-1" aria-hidden="true"></i> Add Product</Link>

        <ProductList>
          {this.showProductList(products)}
        </ProductList>

        {/* {visibleItem < products.length &&
          <button onClick={this.loadMore} type="button" className="btn btn-primary">Load more</button>
        } */}
        {/* Btn loadmore */}
        <div className="products__pagination">
          <span>
            <strong>Total</strong> : {this.showTotalInPage(products)} of {products.length} products
          </span>
          <ul className="pagination justify-content-end">
            <li className={`page-link prev ${currentPage === 1 ? 'disabled' : ''}`} onClick={this.handleClickPageNumbersPrev}>Prev</li>
            {this.showPageNumber(products)}
            <li className={`page-link next ${currentPage === Math.ceil(products.length / todosPerPage) ? 'disabled' : ''}`} onClick={this.handleClickPageNumbersNext}>Next</li>
          </ul>
        </div>

        <ModalComfirm id={this.state.idDelete} onDeleteProduct={this.onDeleteProduct} />
      </div>
    )
  }

  showTotalInPage(products) {
    let { currentPage, todosPerPage } = this.state

    let total = currentPage * todosPerPage

    if (total >= products.length) {
      return products.length
    } else {
      return total
    }
  }

  showProductList = (products) => {
    let { currentPage, todosPerPage } = this.state
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    if (products.length > 0) {
      // return products.slice(0, this.state.visibleItem).map((product, index) => { //Render list with load more
      return products.slice(indexOfFirstTodo, indexOfLastTodo).map((product, index) => {
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

  showPageNumber(products) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(products.length / this.state.todosPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} className={`page-link ${this.state.currentPage === number ? 'active-link' : ''}`} onClick={this.handleClickPageNumbers}>
          {number}
        </li>
      )
    })

    return renderPageNumbers
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

    onDeleteProduct: (id) => {
      dispatch(deleteProductRequest(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)