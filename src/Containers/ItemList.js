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
import changeFilter from '../actions/actions';
import LoadingAnim from '../Components/LoadingAnim';

const ItemList = () => {
  const items = useSelector(state => state.items);
  const category = useSelector(state => state.category);
  const dispatch = useDispatch();
  const handleFilter = value => dispatch(changeFilter(value));
  const match = useRouteMatch();

  const filteredItems = category === 'All' ? items : items.filter(item => item.title === category);

  const itemList = filteredItems.map(item => (
    <Item
      title={item.title}
      year={item.year}
      key={item.title}
      pathLink={`${match.path}/${item.title}`}
    />
  ));

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:itemId`}>
          <ItemDetails />
        </Route>
        <Route path={match.path}>
          <div>
            <SearchBar items={items} changeFilter={handleFilter} />
            {items ? itemList : <LoadingAnim /> }
            (//TODO display on load promise)
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default ItemList;
