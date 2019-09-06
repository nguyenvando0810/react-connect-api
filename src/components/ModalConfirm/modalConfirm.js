import React from 'react';
import './modalConfirm.scss'
class ModalComfirm extends React.Component {
  onDeleteProduct(id) {
    this.props.onDeleteProduct(id)
  }

  render() {
    return (
      <div className="modal fade" id="confirmDelete" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content text-center">
            <div className="modal-header d-flex justify-content-center">
              <h3 className="modal-title heading">Delete Confirm</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="close-modal">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <p><i className="fa fa-bug fa-4x" aria-hidden="true"></i></p>
              <h4>Are you sure ?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info waves-effect btn-sm mr-2" data-dismiss="modal"
                onClick={this.onDeleteProduct.bind(this, this.props.id)}>I agree
              </button>
              <button type="button" className="btn  btn-danger waves-effect btn-sm my-0" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalComfirm