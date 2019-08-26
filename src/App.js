import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">API</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Contacct</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link ">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="text-center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="container">
        <button className="btn btn-primary mb-4"> Add Product</button>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Id</th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
              <td className="text-center">Iphone</td>
              <td className="text-center">70000 VND</td>
              <td className="text-center">
                <span className="badge badge-success">Active</span>
              </td>
              <td className="text-center">
                <button type="button" className="btn btn-info mr-3"><i className="fa fa-pencil mr-2" aria-hidden="true"></i>Edit</button>
                <button type="button" className="btn btn-danger" ><i className="fa fa-trash mr-2" aria-hidden="true"></i>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
