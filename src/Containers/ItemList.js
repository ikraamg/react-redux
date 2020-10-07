import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Item from '../Components/Item';
import SearchBar from '../Components/SearchBar';
import ItemDetails from '../Components/ItemDetails';
import { changeFilter, loadCategories } from '../actions/actions';
import LoadingAnim from '../Components/LoadingAnim';

const ItemList = () => {
  const items = useSelector(state => state.items);
  const category = useSelector(state => state.category);
  const dispatch = useDispatch();
  const handleFilter = value => dispatch(changeFilter(value));
  const match = useRouteMatch();

  if (items.length === 0) { loadCategories(dispatch); }

  let filteredItems = [];
  let itemList = [];
  try {
    filteredItems = category === 'All' ? items[0] : items[0].filter(item => item === category);
    itemList = filteredItems.map(item => (
      <Item
        title={item}
        key={item}
        pathLink={`${match.path}/${item}`}
      />
    ));
  } catch (error) {
    return <LoadingAnim />;
  }
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:itemId`}>
          <ItemDetails />
        </Route>
        <Route path={match.path}>
          <div>
            <SearchBar items={items[0]} changeFilter={handleFilter} />
            {itemList}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default ItemList;
