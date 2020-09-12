import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function RecipeLinks(props) {
    const recipes = props.recipes;
    const titles = props.titles;
    const links = recipes.map((recipe_id, index) => 
      <RecipeLink
        key={index}
        id={recipe_id}
        title={titles[recipe_id]}
      />
    );

    return (
      <Container>
        {links}
      </Container>
    );
}

function RecipeLink(props) {
  return (
      <LinkContainer to={props.id}>
        <Button
          variant="outline-primary"
          size="sm"
          block >
          {props.title} 
        </Button>
      </LinkContainer>
  );
}

  