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
        <td className="text-center">{product.id}</td>
        <td className="text-center">{product.name}</td>
        <td className="text-center">{product.price} USD</td>
        <td className="text-center">
          <span className={`badge badge-${statusClass}`}>{status}</span>
        </td>
        <td className="text-center">
          <Link to={`products/${product.id}/edit`} className="btn btn-info mr-3"><i className="fa fa-pencil mr-2" aria-hidden="true"></i>Edit</Link>
          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#confirmDelete"
            onClick={this.onHandleConfirmDelete.bind(this, product.id)}>
            <i className="fa fa-trash mr-2" aria-hidden="true"></i>
            Delete</button>
        </td>
      </tr>
    )
  }
}

export default Product