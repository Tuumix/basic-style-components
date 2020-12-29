import styled from 'styled-components';
import {fundoClaro} from '../UI/variaveis';

export const Main = styled.div`
  background-color: ${fundoClaro};
  min-height: 90vh;
  padding: 0px 15vw;
`

export const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`