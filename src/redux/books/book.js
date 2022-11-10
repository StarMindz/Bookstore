const InitialState = [];

export const addBook = (id, author, title) => {
  const action = {
    type: 'Bookstore/books/ADDED_BOOK',
    payload: { id, author, title },
  };
  return action;
};

export const removeBook = (id, author, title) => {
  const action = {
    type: 'Bookstore/books/REMOVED_BOOK',
    payload: { id, author, title },
  };
  return action;
};

const bookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ('Bookstore/books/ADDED_BOOK'):
      return [...state, action.payload];

    case ('Bookstore/books/REMOVED_BOOK'):
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
