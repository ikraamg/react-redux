const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});

function getCategories(data) {
  return {
    type: 'UPDATE_CATEGORIES',
    data,
  };
}

const loadCategories = dispatch => {
  fetch('https://api.publicapis.org/categories')
    .then(response => response.json())
    .then(data => {
      dispatch(getCategories(data));
    });
};

export { changeFilter, loadCategories };
