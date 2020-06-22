import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingnsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return(
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon className='icons' />
        <SettingnsIcon className='icons'/>
      </div>
    </Container>
  );
}

export default ChannelButton;