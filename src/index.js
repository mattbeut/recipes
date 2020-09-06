import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, { API } from 'aws-amplify';

const ReactMarkdown = require('react-markdown');

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe_index: null,
      show_links: true,
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({recipe_index: index});
    this.setState({show_links: false});
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
    const show_links = this.state.show_links;
    if (show_links) {
      const recipes = this.state.recipes;
      const links = recipes.map((recipe, index) => 
        <ListRecipeLink
          onClick={this.handleClick}
          key={index}
          index={index}
          title={recipe.title}
        />
      );
      return (
        <Container fluid>
          {links}
        </Container>
      );
    }
    else {
      return (
        <ListRecipe
          id={this.state.recipes[this.state.recipe_index].id}
        />
      );
    }
  }

}

class ListRecipeLink extends React.Component {
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
        <Button
          variant="primary"
          size="sm"
          className="Button btn-block"
          onClick={this.handleClick} >
          {this.props.title}
        </Button>
      </Row>
    );
  }
}

class ListRecipe extends React.Component {
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
      .get("recipeAPI", this.props.id)
      .then(response => this.setState({recipe_text: response.text})) 
      .catch(error => {
        console.log(error.response);
      });
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);