import React from 'react';
import { Waves } from 'styled-icons/material';
import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({ 
  selected, 
  isHome, 
  hasNotifications, 
  mentions 
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <Waves style={{ width: 30, height: 30 }} color='#FFF' />}
    </Button>
  );
}

export default ServerButton;