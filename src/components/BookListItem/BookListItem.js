import React from 'react'

import './BookListItem.scss'

const BookListItem = ({ book, onAddToCart }) => {
  const { title, author, price, coverImg } = book;
  return (
    <li className="book-list-item">
      <div className="img">
        <img src={coverImg} alt={title}/>
      </div>
      <div className="info">
        <span className="title">{title}</span>
        <p className="author">{author}</p>
        <p className="price">${price}</p>
        <button className="add-to-cart" onClick={onAddToCart}>Add to cart</button>
      </div>
    </li>
  )
}

export default BookListItem
