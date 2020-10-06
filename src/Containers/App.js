import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ItemList from './ItemList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/itemList">
          <ItemList />
        </Route>
        <Route path="/">
          <Redirect to="/itemList" />
        </Route>
      </Switch>
    </Router>
  );
}
