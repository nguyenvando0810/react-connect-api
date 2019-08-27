import React from 'react'
import HomePage from './page/HomePage/homePage'
import NotFound from './page/NotFound/notFound'
import ProductListPage from './page/ProductListPage/ProductListPage'
import ProductAction from './page/ProductAction/ProductAction'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => < HomePage />
  },
  {
    path: '/products-list',
    exact: false,
    main: () => < ProductListPage />
  },
  {
    path: '/products/add',
    exact: false,
    main: ({history}) => < ProductAction history={history}/>
  },
  {
    path: '/products/:id/edit',
    exact: false,
    main: ({ match }) => < ProductAction match={match} />
  },
  {
    path: '',
    exact: false,
    main: () => < NotFound />
  }
];

export default routes;