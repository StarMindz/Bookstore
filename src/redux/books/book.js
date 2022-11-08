/* eslint-disable arrow-body-style */
const InitialState = [];

export const addBook = (id, author, title) => {
  return {
    type: 'ADDED_BOOK',
    payload: {
      id: id,
      author: author,
      title: title,
    },
  };
};

export const removeBook = (id, author, title) => {
  return {
    type: 'REMOVED_BOOK',
    payload: {
      id: id,
      author: author,
      title: title,
    },
  };
};

const bookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ('ADDED_BOOK'):
      return [...state, action.payload];

    case ('REMOVED_BOOK'):
      return state.filter((item) => { return item.id !== action.payload.id } )
    default:
      return state;
  };
};

export default bookReducer;
