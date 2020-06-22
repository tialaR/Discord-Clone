import React from 'react';
import { Avatar, Container, HeadphoneIcon, Icons, MicIcon, Profile, SettingnsIcon, UserData } from './styles';

const UserInfo: React.FC = () => {
  return(
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Tiala Rocha</strong>
          <span>#3378</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingnsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;