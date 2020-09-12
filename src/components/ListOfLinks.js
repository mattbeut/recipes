import React from 'react';
import Container from 'react-bootstrap/Container';
import RecipeLink from './RecipeLink';

export default class ListOfLinks extends React.Component {
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
  