import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Amplify, { API } from 'aws-amplify';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReactMarkdown = require('react-markdown');

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

class ListOfLinks extends React.Component {
  render() {
    const recipes = this.props.recipes;
    const links = recipes.map((recipe, index) => 
      <RecipeLink
        onClick={this.props.onClick}
        key={index}
        index={index}
        id={recipe.id}
        title={recipe.title}
      />
    );

    return (
      <Container fluid>
        {links}
      </Container>
    );
  }
}

class RecipeLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <Row>
        <LinkContainer to={this.props.id}>
          <Button
            variant="primary"
            size="sm"
            className="Button btn-block"
            onClick={this.handleClick} >
            {this.props.title}
          </Button>
        </LinkContainer>
      </Row>
    );
  }
}

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe_text: '',
    };
  }

  render() {
    return (
      <ReactMarkdown source={this.state.recipe_text} className="Recipe"/>
    );
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
      .get("recipeAPI", this.props.match.params.recipe_id)
      .then(response => this.setState({recipe_text: response.text})) 
      .catch(error => {
        console.log(error.response);
      });
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);