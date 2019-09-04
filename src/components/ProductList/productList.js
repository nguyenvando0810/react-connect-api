import React from 'react';
import './productList.scss'

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              {/* <th className="text-center">#</th> */}
              <th className="text-center">Id</th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductList