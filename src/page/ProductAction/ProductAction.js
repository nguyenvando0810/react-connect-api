import React from 'react';
import './ProductAction.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addProductRequest, editProductRequest, updateProductRequest } from '../../actions/index'
class ProductAction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      description: '',
      price: '',
      status: '',
      error: {
        name: false,
        description: false,
        price: false
      }
    }

    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  componentDidMount() {
    let { match } = this.props

    if (match) {
      let id = match.params.id
      this.props.onEditProduct(id)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      let { itemEditing } = nextProps

      this.setState({
        id: itemEditing.id,
        name: itemEditing.name,
        description: itemEditing.description,
        price: itemEditing.price,
        status: itemEditing.status
      })
    }
  }

  onHandleChange = (e) => {
    let target = e.target
    let name = target.name
    let value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  onHandleSubmit(e) {
    e.preventDefault()

    let { id, name, description, price, status } = this.state
    let { history } = this.props
    let product = { id, name, description, price, status }

    console.log("TCL: ProductAction -> onHandleSubmit -> product", product)

    if (id) {
      if (name || price) {
        this.props.onUpdateProduct(product)
        history.goBack()
      }
    } else {
      if (name || price) {
        this.props.onAddProduct(product)
        history.goBack()
      }
    }
  }

  render() {
    let { name, description, price, status } = this.state

    return (
      <div className="container">
        <div className="product__form mt-5">
          <div className="col-md-8 ml-auto mr-auto">
            <div className="product__form--warpper">
              <div className="product__form-heading text-center">Form Products</div>
              <div className="product__form-content">
                <form onSubmit={this.onHandleSubmit} >
                  <div className="md-form">
                    <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Name ..." onChange={this.onHandleChange} onBlur={this.onBlurName} required />
                    {/* <label htmlFor="name">Name product</label> */}
                    <div class="error_message">
                      Please enter name
                    </div>
                  </div>
                  <div className="md-form">
                    <textarea className="md-textarea form-control" name="description" placeholder="Description ..." value={description} onChange={this.onHandleChange} rows="3"></textarea>
                    {/* <label htmlFor="name">Name product</label> */}
                  </div>
                  <div className="md-form">
                    <input type="number" className="form-control" id="price" name="price" placeholder="Price ..." value={price} onChange={this.onHandleChange} required />
                    {/* <label htmlFor="price">Price</label> */}
                  </div>
                  <div className="custom-control custom-checkbox">
                    <label className="form-check-label">
                      <input type="checkbox" className="custom-control-input" id="status" name="status" value={status} onChange={this.onHandleChange} checked={status} />
                      <label className="custom-control-label" htmlFor="status">Sold in</label>
                    </label>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-info waves-effect btn-sm my-0 mr-3"><i className="fa fa-pied-piper mr-1" aria-hidden="true"></i> Save</button>
                    <Link to="/products-list" className="btn btn-danger waves-effect btn-sm my-0" ><i className="fa fa-modx mr-2" aria-hidden="true"></i>Cancel</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(addProductRequest(product))
    },

    onEditProduct: (id) => {
      dispatch(editProductRequest(id))
    },

    onUpdateProduct: (product) => {
      dispatch(updateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAction)
