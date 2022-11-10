const InitialState = [];

export const checkStatus = () => {
  const action = {
    type: 'Bookstore/categories/STATUS_CHECKED',
  };
  return action;
};

const categoriesReducer = (state = InitialState, action) => {
  if (action.type === 'Bookstore/categories/STATUS_CHECKED') {
    return 'Under construction';
  }
  return state;
};

export default categoriesReducer;
