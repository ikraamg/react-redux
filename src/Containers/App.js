import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ItemList from './ItemList';
import AppBar from '../Components/AppBar';

export default function App() {
  return (
    <div>
      <AppBar />
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
    </div>
  );
}
