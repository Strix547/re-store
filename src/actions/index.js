const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
}

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}

const bookAddToCart = (bookID) => {
  return {
    type: 'BOOK_ADD_TO_CART',
    payload: bookID
  }
}

const bookRemoveFromCart = (bookID) => {
  return {
    type: 'BOOK_REMOVE_FROM_CART',
    payload: bookID
  }
}

const bookDeleteFromCart = (bookID) => {
  return {
    type: 'BOOK_DELETE_FROM_CART',
    payload: bookID
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
   .then(data => dispatch(booksLoaded(data)))
   .catch(error => dispatch(booksError(error)));
}

export {
  fetchBooks,
  bookAddToCart,
  bookRemoveFromCart,
  bookDeleteFromCart
}