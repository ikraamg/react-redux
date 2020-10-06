import top100Films from '../helpers/testArray';

const itemReducer = (state = top100Films, action) => {
  switch (action.type) {
    case 'UPDATE_ITEMS':
      return [
        action.item,
      ];
    default:
      return state;
  }
};

export default itemReducer;
