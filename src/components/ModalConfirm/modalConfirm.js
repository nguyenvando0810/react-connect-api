import React from 'react';

class ModalComfirm extends React.Component {
  onDeleteProduct(id) {
    this.props.onDeleteProduct(id)
  }

  render() {
    return (
      <div className="modal fade" id="confirmDelete" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Delete Confirm</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              Do you want delete it ?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.onDeleteProduct.bind(this, this.props.id)}>I agree</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalComfirm