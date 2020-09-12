import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default class RecipeLink extends React.Component {
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
              variant="outline-primary"
              size="sm"
              block
              className="Button"
              onClick={this.handleClick} >
              {this.props.title} 
            </Button>
          </LinkContainer>
        </Row>
      );
    }
  }