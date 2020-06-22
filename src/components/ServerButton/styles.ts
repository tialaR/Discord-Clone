import styled from 'styled-components';
import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;
  
  background-color: ${ (props) => props.isHome ? 'var(--first)' : 'var(--primary)' };

  position: relative;
  cursor: pointer;

  /* Bolinha branca da esquerda que define se a pessoa tem notificações */
  /* Hash de CSS  -> O exemplo abaixo mostra a estilização de um pseudo element*/
  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'};
  }

  /* Bolinha vermelha de menções */
  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    /* estabelece que o conteúdo da bolinha será o props.mentions */
    content: '${props => props.mentions && props.mentions}';
    /* mostra ou não mostra a bolinha -> mostra se existirem menções */
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  /* Efeito de 2 segundos -> transição para mudança de estilo ao passar o cursor no elemento */
  transition: border-radius .2s, background-color .2s;

  /* Transição para mudança de estilo ao passar o cursor no elemento */
  &.active, &:hover {
    border-radius: 16px;
    background-color: ${props => props.isHome ? 'var(--first)' : 'var(--discord)'}
  }
`;
