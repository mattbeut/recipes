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
      recipes: [
        {
          link: 'https://pnpno9xich.execute-api.us-east-1.amazonaws.com/devel/recipe/barbacoa_instant_pot',
          description: 'Barbacoa (Instant Pot)'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Basic+Pan+Sauce.md',
          description: 'Basic Pan Sauce'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Beer+Battered+Fish+Tacos.md',
          description: 'Beer Battered Fish Tacos'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Carnitas+(Instant+Pot).md',
          description: 'Carnitas (Instant Pot)'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Chicken+Breast+Chili+(Slow+Cooker).md',
          description: 'Chicken Breast Chili (Slow Cooker)'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Chicken+Noodle+Soup+(Instant+Pot).md',
          description: 'Chicken Noodle Soup (Instant Pot)'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Chicken%2C+Veggie%2C+and+Farro+Soup+(Instant+Pot).md',
          description: 'Chicken, Veggie, and Farro Soup (Instant Pot)'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Chorizo+Chickpea+Stew+with+Greens.md',
          description: 'Chorizo Chickpea Stew with Greens'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Cinnamon+Pumpkin+Cookies.md',
          description: 'Cinnamon Pumpkin Cookies'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Dill+Pickle+Pasta+Salad.md',
          description: 'Dill Pickle Pasta Salad'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Ground+Beef+and+Broccoli+Fried+Rice.md',
          description: 'Ground Beef and Broccoli Fried Rice'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Ground+Turkey+Sweet+Potato+Stuffed+Peppers.md',
          description: 'Ground Turkey Sweet Potato Stuffed Peppers'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Jalape%C3%B1o+Lime+Chicken+Soup.md',
          description: 'Jalapeño Lime Chicken Soup'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Mexican+Cole+Slaw.md',
          description: 'Mexican Cole Slaw'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Penne+Alla+Vodka.md',
          description: 'Penne Alla Vodka'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Pickled+Red+Cabbage.md',
          description: 'Pickled Red Cabbage'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Roasted+Cauliflower.md',
          description: 'Roasted Cauliflower'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Ropa+Vieja+(Instant+Pot).md',
          description: 'Ropa Vieja (Instant Pot)'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Sausage%2C+Arugula%2C+Lemon%2C+and+Parmesan+Soup.md',
          description: 'Sausage, Arugula, Lemon, and Parmesan Soup'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Spanish+Chickpeas+and+Rice+with+Chicken.md',
          description: 'Spanish Chickpeas and Rice with Chicken'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Tacos+al+Pastor+(Instant+Pot).md',
          description: 'Tacos al Pastor (Instant Pot)'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Thai+Red+Curry+Noodle+Soup.md',
          description: 'Thai Red Curry Noodle Soup'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Turkey+Chili+(Slow+Cooker).md',
          description: 'Turkey Chili (Slow Cooker)'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/Tuscan+Sausage+and+White+Bean+Soup.md',
          description: 'Tuscan Sausage and White Bean Soup'
        },
        {
          link: 'https://katie-matt-recipes.s3.amazonaws.com/White+Bean+Chicken+Chili.md',
          description: 'White Bean Chicken Chili'
        },
        //{
        //  link: '',
        //  description: ''
        //},
      ],
      recipe_index: null,
      show_links: true,
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({recipe_index: index});
    this.setState({show_links: false});
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
          description={recipe.description}
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
          link={this.state.recipes[this.state.recipe_index].link}
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
          {this.props.description}
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
            endpoint: "https://pnpno9xich.execute-api.us-east-1.amazonaws.com/devel"
          },
        ]
      }
    });
    const link = "/recipe/barbacoa_instant_pot";
    API
      .get("recipeAPI", link)
      .then(response => response.text) 
        .then(text => this.setState({recipe_text: text}))
        .catch(error => {
          console.log(error.response);
        })
      .catch(error => {
        console.log(error.response);
      });
    //fetch(link)
    //  .then(response => response.blob())
    //    .then(blob => blob.text())
    //      .then(text => this.setState({recipe_text: text}));
  }
}
  

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);