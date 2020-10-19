import React from 'react';
import Amplify, { API, Auth } from 'aws-amplify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CategoryLinks from './CategoryLinks';
import RecipeLinks from './RecipeLinks';

function SignUpButton(props) {
    return (
        <Button
            variant="info"
            size="sm"
            className="SignUpButton"
            onClick={props.handleClick}>
            Sign Up
        </Button>
    )
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: {
                "All": [],
            },
            titles: {}
        };        
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

    handleSignUpClick() {

        const { user } = Auth.signUp()


    }

    handleSignInClick() {

    }

    render() {
        let recipes = this.state.categories[this.props.selected_category];
        if (typeof recipes === 'undefined') {
            recipes = [];
        }
        
                //<Row className="LoginRow">
                    //<SignUpButton handleClick={this.handleSignUpClick} />
                    //<SignInButton handleClick={this.handleSignInClick} />
                //</Row>
        return (
            <Container className="Container">
                <CategoryLinks
                    categories={this.state.categories}
                    handleClick={this.props.handleClick} />
                <RecipeLinks
                    recipes={recipes}
                    titles={this.state.titles} />
            </Container>
        );
    }
}