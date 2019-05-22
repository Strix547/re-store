const updateCartOrder = (state, bookID, quantity) => {
  const updatedCart = updateCartItems(state, bookID, quantity);
  const updatedTotal = updatedCart.reduce((total, item) => total + item.total, 0);
  const updatedCount = updatedCart.reduce((total, item) => total + item.count, 0);
  return {
    cartItems: updatedCart,
    itemsCount: updatedCount,
    orderTotal: updatedTotal
  }
}
 
const updateCartItems = (state, bookID, quantity) => {
  const { shoppingCart: {cartItems}, bookList: {books} } = state;

  // Если такая книга уже есть в корзине
  const sameBook = cartItems.find(({id}) => id === bookID);
  if (sameBook) {
    // Если количество становится отрицательным, то удаляем эту книгу из списка
    if (sameBook.count + quantity <= 0) {
      return cartItems.filter(({id}) => id !== bookID)
    }

    return cartItems.map(item => {
      if (sameBook.id !== item.id) return item;
       
      return {
        ...item,
        count: item.count + quantity,
        total: item.total + (item.total / item.count) * quantity
      }
    });
  }
  // Если такой книги нет, добавляем новую
  const book = books.find(({id}) => id === bookID);

  const newBook = {
    id: book.id,
    title: book.title,
    count: 1,
    total: book.price
  }

  return [...cartItems, newBook];
}

const updateShoppingCart = (state, {type, payload}) => {
  if (state === undefined) {
    return {
      cartItems: [],
      itemsCount: 0,
      orderTotal: 0,
    }
  }

  switch (type) {
    case 'BOOK_ADD_TO_CART':
      return updateCartOrder(state, payload, 1);
    case 'BOOK_REMOVE_FROM_CART':
      return updateCartOrder(state, payload, -1);
    case 'BOOK_DELETE_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === payload);
      return updateCartOrder(state, payload, -item.count);
    
    default:
      return state.shoppingCart
  }
}

export default updateShoppingCart