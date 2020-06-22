import React from 'react';
import ChannelButton from '../ChannelButton';
import { AddCategoryIcon, Category, Container } from './styles';

const ChannelList: React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="curso React" />
      <ChannelButton channelName="estudos" />
      <ChannelButton channelName="estudos React Native" />

    </Container>
  );
}

export default ChannelList;