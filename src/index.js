import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { API } from 'aws-amplify';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListOfLinks from './components/ListOfLinks';
import Recipe from './components/Recipe';

import './index.css';
import './custom.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe_index: 0,
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({recipe_index: index});
  }

  componentDidMount() {
    Amplify.configure({
      API: {
        endpoints: [
          {
            name: "recipeAPI",
            endpoint: "https://pnpno9xich.execute-api.us-east-1.amazonaws.com/devel/recipe/"
          },
        ]
      }
    });
    API
      .get("recipeAPI", "all")
      .then(response => this.setState({recipes: response.all_keys})) 
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <Switch>
        <Route
          path="/" exact render={
            (props) => <ListOfLinks {...props} recipes={this.state.recipes} onClick={this.handleClick} />
          }
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