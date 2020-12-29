import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import {
  Cabecario,
  LogoImg,
  BotaoPrimario,
  BotaoSecundario
} from './styles';

const Cabecalho = () => {
  return (
    <Cabecario>
      <LogoImg src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BotaoSecundario href="https://google.com">
          Ajuda
        </BotaoSecundario>
        <BotaoPrimario href="https://google.com">
          Sair
        </BotaoPrimario>
      </div>
    </Cabecario>
  );
};

export default Cabecalho;
