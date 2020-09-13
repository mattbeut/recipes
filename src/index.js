import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Recipe from './components/Recipe';

import './index.css';
import './custom.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_category: "All",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(category) {
    this.setState({selected_category: category});
  }

  render() {
    return (
      <Switch>
        <Route
          path="/" exact render={(props) => (
            <HomePage {...props}
              selected_category={this.state.selected_category}
              handleClick={this.handleClick}
            />
          )}
        />
        <Route
          path="/:recipe_id" component={Recipe}
        />
      </Switch>
    );

  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);