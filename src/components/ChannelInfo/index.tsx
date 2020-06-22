import React from 'react';
import { Container, Description, HashtagIcon, Separator, Title } from './styles';

const ChannelInfo: React.FC = () => {
  return(
    <Container>
      <HashtagIcon />

      <Title>chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversa</Description>
    </Container>
  );
}

export default ChannelInfo;