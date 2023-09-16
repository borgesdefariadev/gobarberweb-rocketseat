import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import logo from '../../assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={profile.avatar.url || 'http://localhost:8080/50/myavatar'}
              alt="Random Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
