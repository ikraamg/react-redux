import React, { lazy, Suspense } from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AppBar from '../Components/AppBar';
import LoadingAnim from '../Components/LoadingAnim';

const ItemList = lazy(() => import('./ItemList'));

export default function App() {
  return (
    <div>
      <AppBar />
      <Router>
        <Suspense fallback={LoadingAnim()}>
          <Switch>
            <Route path="/itemList">
              <ItemList />
            </Route>
            <Route path="/">
              <Redirect to="/itemList" />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}
