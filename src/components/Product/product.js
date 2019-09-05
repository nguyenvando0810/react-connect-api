import React from 'react';
import './product.scss'
import { Link } from 'react-router-dom'
class Product extends React.Component {
  onHandleConfirmDelete(id) {
    this.props.getIdProductDelete(id)
  }

  render() {
    let { product } = this.props
    let status = product.status ? 'Sold In' : 'Sold Out'
    let statusClass = product.status ? 'success' : 'warning'

    return (
      <tr>
        {/* <td className="text-center">{index}</td> */}
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td style={{width:"250px", maxWidth:"250px"}}>
          <div className="item__dot">
            {product.description}</div>
          </td>
        <td>{product.price} USD</td>
        <td>
          <span className={`badge badge-${statusClass}`}>{status}</span>
        </td>
        <td>
          <span>
            <Link to={`products/${product.id}/edit`} className="btn btn-info btn-sm my-0 mr-3"><i className="fa fa-pencil mr-2" aria-hidden="true"></i>Edit</Link>
          </span>
          <span className="table-remove">
            <button type="button" className="btn btn-danger btn-sm my-0" data-toggle="modal" data-target="#confirmDelete"
              onClick={this.onHandleConfirmDelete.bind(this, product.id)}>
              <i className="fa fa-trash mr-2" aria-hidden="true"></i>Delete
            </button>
          </span>
        </td>
      </tr>
    )
  }
}

export default Product