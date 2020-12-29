import React from 'react';
import {Container} from './styles';

const Item = (props) => {
    const {type, from, value}  = props;

    return (
        <Container>
            <span>{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Container>
    )
}

export default Item;