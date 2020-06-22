import React, { useEffect, useRef } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Input, InputIcon, InputWrapper, Messages } from './styles';

const ChannelData: React.FC = () => {

  //Criando uma referência de mensagem (div de mensagens)
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  //Definindo que ao carregar a tela as mensagens monstradas serão as ultimas da lista
  useEffect(() => {
    const div = messagesRef.current;

    if(div !== null && div !== undefined){
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return(
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Tiala Rocha"
            date="23/07/2020"
            content="Hoje é dia de codar."
          />
        ))}
        <ChannelMessage
          author="Fernanda Santana"
          date="23/07/2020"
          hasMention
          isBot
          content={
            <>
              <Mention>@Tiala Rocha</Mention>, fique atenta ao horario de início do curso.
            </>
          }
        />
      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;