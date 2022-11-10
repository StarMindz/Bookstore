const InitialState = [
  {
    id: 1,
    author: 'J.K. Rowling',
    title: 'Harry Porter',
  },
  {
    id: 2,
    author: 'J.R.R. Tolkien',
    title: 'The Lord of the Rings',
  },
];

export const addBook = (id, author, title) => {
  const action = {
    type: 'Bookstore/books/ADDED_BOOK',
    payload: { id, author, title },
  };
  return action;
};

export const removeBook = (id) => {
  const action = {
    type: 'Bookstore/books/REMOVED_BOOK',
    payload: { id },
  };
  return action;
};

const bookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ('Bookstore/books/ADDED_BOOK'):
      return [...state, action.payload];

    case ('Bookstore/books/REMOVED_BOOK'):
      return [...state.filter((item) => item.id !== parseInt(action.payload.id, 10))];
    default:
      return state;
  }
};

export default bookReducer;
