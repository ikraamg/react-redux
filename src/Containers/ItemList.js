import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Item from '../Components/Item';
import SearchBar from '../Components/SearchBar';
import ItemDetails from '../Components/ItemDetails';

const ItemList = () => {
  const items = useSelector(state => state.items);
  const category = useSelector(state => state.category);
  console.log(category);

  const filteredBooks = category === 'All' ? items : items.filter(item => item.title === category);
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
            <SearchBar />
            {itemList}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default ItemList;
