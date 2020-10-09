const itemReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_CATEGORIES':
      return [
        action.data,
      ];
    default:
      return state;
  }
};

export default itemReducer;
