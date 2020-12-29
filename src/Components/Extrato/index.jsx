import React from 'react';
import { Box } from '../UI'
import { extratoLista } from '../../info';
import Items from '../Items';

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map( item => {
                return (
                    <Items key={item.id} type={item.type} from={item.from} value={item.value} date={item.date}/>
                );
            })};
        </Box>
    )
}

export default Extrato;