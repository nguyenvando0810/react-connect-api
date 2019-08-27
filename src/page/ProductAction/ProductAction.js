import React from 'react';
import './ProductAction.scss'
import callApi from '../../utils/callApi'
import { Link } from 'react-router-dom'

class ProductAction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      price: '',
      status: ''
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
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

    let { name, price, status } = this.state
    let { history } = this.props

    callApi('products', 'POST', {
      name,
      price,
      status
    }).then(res => {
      if (res.status === 201) {
        history.goBack()
      }
    })
  }

  render() {
    let { name, price, status } = this.state
    return (
      <div className="container">
        <div className="product__form">
          <div className="product__form--warpper">
            <div className="product__form-heading">Form products</div>
            <div className="product__form-content">
              <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" className="form-control" name="name" value={name} placeholder="Name..." onChange={this.onHandleChange} />
                </div>
                <div className="form-group">
                  <label>Price:</label>
                  <input type="number" className="form-control" name="price" value={price} placeholder="Price..." onChange={this.onHandleChange} />
                </div>
                <div className="form-group">
                  <label>Status:</label>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" name="status" value={status} onChange={this.onHandleChange} />
                      Sold In
                    </label>
                  </div>
                </div>
                <div className="text-right">
                  <button type="submit" className="btn btn-primary mr-3"><i className="fa fa-pied-piper mr-1" aria-hidden="true"></i> Save</button>
                  <Link to="/products-list" className="btn btn-danger" ><i className="fa fa-modx mr-2" aria-hidden="true"></i>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductAction