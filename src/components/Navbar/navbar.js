import React from 'react';
import './navbar.scss'
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Products',
    to: '/products-list',
    exact: false
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name: 'About',
    to: '/About',
    exact: false
  },
]

const MenusLink = ({ label, to, active }) => {
  return (
    <Route
      path={to}
      exact={active}
      children={({ match }) => {
        let active = match ? 'active' : ''

        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className="nav-link">{label}</Link>
          </li>
        )
      }}
    />
  )
}


class Navbar extends React.Component {
  showMenu = (menus) => {
    if (menus.length > 0) {
      return menus.map((menu, index) => {
        return <MenusLink key={index} label={menu.name} to={menu.to} active={menu.exact} />
      })
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
            <a href="/" className="navbar-brand">API</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {this.showMenu(menus)}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
