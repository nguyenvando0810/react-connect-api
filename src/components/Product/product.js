import React from 'react';
import './product.scss'

class Product extends React.Component {
  onHandleConfirmDelete(id) {
    console.log(id);
  }

  render() {
    let { index, product } = this.props
    let status = product.status ? 'Sold In' : 'Sold Out'
    let statusClass = product.status ? 'success' : 'warning'

    return (
      <tr>
        <td className="text-center">{index}</td>
        <td className="text-center">{product.id}</td>
        <td className="text-center">{product.name}</td>
        <td className="text-center">{product.price} VND</td>
        <td className="text-center">
          <span className={`badge badge-${statusClass}`}>{status}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-info mr-3"><i className="fa fa-pencil mr-2" aria-hidden="true"></i>Edit</button>
          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#confirmDelete" onClick={this.onHandleConfirmDelete.bind(this, product.id)}><i className="fa fa-trash mr-2" aria-hidden="true"></i>Delete</button>
        </td>
        <div className="modal fade" id="confirmDelete" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Confirm delete</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Do you want delete it ?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </tr>
    )
  }
}

export default Product