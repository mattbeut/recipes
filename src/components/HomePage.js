import React from 'react';
import Amplify, { API } from 'aws-amplify';
import Container from 'react-bootstrap/Container';
import CategoryLinks from './CategoryLinks';
import RecipeLinks from './RecipeLinks';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: {
                "All": []
            },
            selected_category: "All",
            titles: {}
        };        

        this.handleClick = this.handleClick.bind(this);
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
        .get("recipeAPI", "meta")
        .then(response => this.setState({
            categories: response.categories,
            titles: response.titles
        }))
        .catch(error => {
            console.log(error.response);
        });
    }

    handleClick(category) {
       this.setState({selected_category: category});
    }

    render() {
        return (
            <Container fluid>
                <CategoryLinks
                    categories={this.state.categories}
                    handleClick={this.handleClick} />
                <RecipeLinks
                    recipes={this.state.categories[this.state.selected_category]}
                    titles={this.state.titles} />
            </Container>
        );
    }
}