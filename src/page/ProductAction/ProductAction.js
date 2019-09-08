import React from 'react';
import './ProductAction.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addProductRequest, editProductRequest, updateProductRequest } from '../../actions/index'
// import { Prompt } from 'react-router-dom'
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
      },

      // isShowPrompt: false
    }

    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onHandleBlurName = this.onHandleBlurName.bind(this)
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

    // if (value) {
    //   this.setState({
    //     isShowPrompt: true
    //   })
    // } else {
    //   this.setState({
    //     isShowPrompt: false
    //   })
    // }
  }

  onHandleSubmit(e) {
    e.preventDefault()

    let { id, name, description, price, status } = this.state
    let { history } = this.props
    let product = { id, name, description, price, status }

    if (id) {
      this.props.onUpdateProduct(product)
      history.goBack()
    } else {
      this.props.onAddProduct(product)
      history.goBack()
    }
  }

  onHandleBlurName(e, field) {
    if (!e.target.value) {
      this.setState({
        error: { ...this.state.error, [field]: true }
      })
    } else {
      this.setState({
        error: { ...this.state.error, [field]: false }
      })
    }
  }

  handleOnInput(e) {
    e.target.value = e.target.value.replace(/[^0-9]+/g, '')

    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10)
      return false
    }
  }

  render() {
    let { name, description, price, status, error } = this.state

    return (
      <div className="container">
        <div className="product__form mt-5">
          <div className="col-md-8 ml-auto mr-auto">
            <div className="product__form--warpper">
              <div className="product__form-heading text-center">Form Products</div>
              <div className="product__form-content">
                <form onSubmit={this.onHandleSubmit} >
                  <div className="md-form">
                    <input type="text" className="form-control" name="name" value={name} placeholder="Name" onChange={this.onHandleChange}
                      onBlur={(e) => this.onHandleBlurName(e, 'name')} />
                    {error.name &&
                      <div className="error_message">Name cannot be empty</div>
                    }
                  </div>
                  <div className="md-form">
                    <textarea className="md-textarea form-control" name="description" placeholder="Description" value={description} onChange={this.onHandleChange}
                      onBlur={(e) => this.onHandleBlurName(e, 'description')} rows="2">
                    </textarea>
                    {error.description &&
                      <div className="error_message">Description cannot be empty</div>
                    }
                  </div>
                  <div className="md-form">
                    <input type="number" min="0" className="form-control" name="price" placeholder="Price" value={price}
                      onChange={this.onHandleChange}
                      onBlur={(e) => this.onHandleBlurName(e, 'price')}
                      onInput={this.handleOnInput}/>
                    {error.price &&
                      <div className="error_message">Price cannot be empty</div>
                    }
                  </div>
                  <div className="custom-control custom-checkbox">
                    <label className="form-check-label">
                      <input type="checkbox" className="custom-control-input" id="status" name="status" value={status} onChange={this.onHandleChange} checked={status} />
                      <label className="custom-control-label" htmlFor="status">Sold in</label>
                    </label>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-info waves-effect btn-sm my-0 mr-3" disabled={!name || !description || !price}><i className="fa fa-pied-piper mr-1" aria-hidden="true"></i> Save</button>
                    <Link to="/products-list" className="btn btn-danger waves-effect btn-sm my-0" ><i className="fa fa-modx mr-2" aria-hidden="true"></i>Cancel</Link>

                    {/* <Prompt
                      when={isShowPrompt}
                      message={`Dữ liệu của bạn có thể sẽ không được lưu lại.`}
                    /> */}
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
