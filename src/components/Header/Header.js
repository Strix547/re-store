import React from 'react'

import './Header.scss'

import { Link } from 'react-router-dom'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ itemsCount, total}) => {
  return (
    <header>
      <Link to="/">ReStore</Link>
      <Link to="/cart"><span className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></span>{itemsCount} items (<span>${total}</span>)</Link>
    </header>
  )
}

export default Header
