import React from 'react'

import './ShoppingCartTable.scss'

import { connect } from 'react-redux'
import {bookAddToCart, bookRemoveFromCart, bookDeleteFromCart} from '../../actions'
import { faMinusCircle, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

  const renderRow = (item, i) => {
    const { id, title, count, total} = item;
    return (
      <tr key={id}>
        <td>{i + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td className="actions">
          <button className="decrease" onClick={() => onDecrease(id)}><FontAwesomeIcon icon={faMinusCircle} /></button>
          <button className="increase" onClick={() => onIncrease(id)}><FontAwesomeIcon icon={faPlusCircle} /></button>
          <button className="delete" onClick={() => onDelete(id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </td>
      </tr>
    )
  }
  
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>
      <p className="total">Total: <span>${total}</span></p>
    </div>
  )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     onIncrease: (id) => dispatch(bookAddToCart(id)),
     onDecrease: (id) => dispatch(bookRemoveFromCart(id)),
     onDelete: (id) => dispatch(bookDeleteFromCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
