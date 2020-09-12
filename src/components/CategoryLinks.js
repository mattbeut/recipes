import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function CategoryLinks(props) {
    const category_names = props.categories;
    const links = Object.keys(category_names).map((category_name, index) => {
        return (
            <Button
                className="CategoryButton"
                key={index}
                variant="outline-secondary"
                size="sm"
                onClick={() => props.handleClick(category_name)} >
                {category_name}
            </Button>
        );
    });
    return (
        <Row className="CategoriesRow">
            {links}
        </Row>
    );
}
