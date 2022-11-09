const InitialState = [];

export const checkStatus = () => {
  return {
    type: 'STATUS_CHECKED',
  };
};

const categoriesReducer = (state = InitialState, action) => {
  if (action.type === 'STATUS_CHECKED') {
    return 'Under construction';
  }
  return state;
};

export default categoriesReducer;
