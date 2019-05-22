import React from 'react'

import {BookstoreServiceConsumer} from '../BookstoreContextService'

const withBookService = () => Wrapped => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return <Wrapped {...props} bookstoreService={bookstoreService} />
          }
        }
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookService