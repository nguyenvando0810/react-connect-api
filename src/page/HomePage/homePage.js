import React from 'react';
import './homePage.scss'
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="app-heading mt-3 mb-4">Home Page</h1>
        <h1 className="app-heading mt-3">
            <i className="fa fa-quote-left mr-2" aria-hidden="true"></i>
            If you find it hard to laugh at yourself, <br />I would be happy to do it for you.
            <i className="fa fa-quote-right ml-2" aria-hidden="true"></i>
        </h1>
      </div>
    )
  }
}

export default HomePage