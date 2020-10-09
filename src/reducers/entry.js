const entryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ENTRIES':
      return [
        action.data,
      ];
    default:
      return state;
  }
};

export default entryReducer;
