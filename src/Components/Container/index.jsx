import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from '../Extrato'
import {
  Main,
  Conteudo
} from './styles';

const Container = () => {
  return (
    <Main>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Main>
  );
};

export default Container;
