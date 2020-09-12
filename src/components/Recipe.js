import React from 'react';
import Amplify, { API } from 'aws-amplify';

const ReactMarkdown = require('react-markdown');

export default class Recipe extends React.Component {
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
