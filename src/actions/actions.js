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

function getEntries(data) {
  return {
    type: 'UPDATE_ENTRIES',
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

const loadEntries = (dispatch, category) => {
  fetch(`https://api.publicapis.org/entries?category=${category}&https=true`)
    .then(response => response.json())
    .then(data => {
      dispatch(getEntries(data.entries));
    });
};

export {
  changeFilter, loadCategories, loadEntries, getCategories, getEntries,
};
