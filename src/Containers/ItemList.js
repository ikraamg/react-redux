import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Item from '../Components/Item';
import SearchBar from '../Components/SearchBar';
import changeFilter from '../actions/actions';
import ItemDetails from '../Components/ItemDetails';

function ItemList({ items, category }) {
  const handleCategory = e => {
    // newCategory(e.target.value);
    console.log(e.target.value);
  };
  // const handleRemoveBook = item => deleteBook(item);
  // const handleItemClick = item => (
  //   <Link to={`${match.url}/props-v-state`}>
  //     Props v. State
  //   </Link>
  // );

  const filteredBooks = category === 'All' ? items : items.filter(item => item.category === category);
  const itemList = filteredBooks.map(item => (
    <Item
      title={item.title}
      year={item.year}
      key={item.title}
    />
  ));

  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:itemId`}>
          <ItemDetails />
        </Route>
        <Route path={match.path}>
          <div>
            <SearchBar handleCategory={handleCategory} />
            {itemList}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.items,
  category: state.category,
});

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  category: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ItemList);
