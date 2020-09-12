import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Recipe from './components/Recipe';

import './index.css';
import './custom.scss';

function App() {
    return (
      <Switch>
        <Route
          path="/" exact component={HomePage}
        />
        <Route
          path="/:recipe_id" component={Recipe}
        />
      </Switch>
    );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);