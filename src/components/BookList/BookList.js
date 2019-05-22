import React, { Component } from 'react'

import './BookList.scss'

import BookListItem from '../BookListItem'
import LoadSpinner from '../LoadSpinner'
import ErrorIndicator from '../ErrorIndicator'
import {connect} from 'react-redux'
import {withBookstoreService} from '../hoc'
import {fetchBooks, bookAddToCart} from '../../actions'
import {compose} from '../../utils'

const BookList = ({books, onAddToCart}) => {

  return (
    <ul className="book-list">
      {
        books.map(book => {
          return <BookListItem
                    key={book.id}
                    book={book}
                    onAddToCart={() => onAddToCart(book.id)}
                  />
        })
      }
    </ul>
  )
}

class BookListContainer extends Component {

  componentDidMount = () => {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddToCart } = this.props;

    if (loading) return <LoadSpinner />
    if (error) return <ErrorIndicator />

    return <BookList books={books} onAddToCart={onAddToCart} />
  }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
  return { books, loading, error };
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddToCart: (id) => dispatch(bookAddToCart(id))
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)

