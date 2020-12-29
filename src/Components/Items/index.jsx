import React from 'react';
import {Itens} from './styles';
import Item from './Item'
import ImageFilter from '../../Components/ImageFilter';

const Items = (props) => {
    const {date, type} = props;
    return (
        <Itens>
            {ImageFilter(type)}
            <Item {...props}/>
            <span>{date}</span>
        </Itens>
    )
}

export default Items;