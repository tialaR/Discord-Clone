import styled from 'styled-components';

export const Container = styled.div`
  /* Customizando a grid SL */
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;
  /* Inserindo scroll vertical na grid SL */
  overflow-y: scroll;

  /* Fazendo com que o scroll fique invisível */
  ::-webkit-scrollbar{
    display: none; 
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  
  margin-bottom: 8px;
`;

