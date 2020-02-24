import React from 'react'

import '../../fonts/roboto.css'
import '../../scss/screen.scss'
import './App.scss'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from '../Header'
import {HomePage, CartPage} from '../../pages'


const App = ({total, itemsCount}) => {
  return (
    <div id="app">
      <Header itemsCount={itemsCount} total={total} />
      <Router basename={process.env.PUBLIC_URL + '/'}>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/cart" exact component={CartPage}/>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({shoppingCart: {orderTotal, itemsCount}}) => {
  return {
    total: orderTotal,
    itemsCount: itemsCount
  }
}

export default connect(mapStateToProps)(App)