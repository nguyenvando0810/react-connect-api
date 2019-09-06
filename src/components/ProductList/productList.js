import React from 'react';
import './productList.scss'

class ProductList extends React.Component {
  render() {
    return (
      <table className="table table-responsive-sm table-striped text-center table-hover table-bordered mt-4">
        <thead>
          <tr>
            {/* <th className="text-center">#</th> */}
            <th className="text-center">Id</th>
            <th className="text-center">Name</th>
            <th className="text-center" style={{width:"250px", maxWidth:"250px"}}>Description</th>
            <th className="text-center">Price</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    )
  }
}

export default ProductList