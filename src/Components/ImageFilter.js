import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { IconeTema } from '../Components/UI'

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt='Alimentação' />,
        Outros: <IconeTema src={outros} alt='Outros' />,
        Saude: <IconeTema src={saude} alt='Saúde' />,
        Utilidades: <IconeTema src={utilidades} alt='Utilidades' />,
        Transporte: <IconeTema src={transporte} alt='Transporte' />,
    };

    return Images[type];
}