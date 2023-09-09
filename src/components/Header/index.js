import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import logo from '../../assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

function Header() {
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
              <strong>Nome do usuário</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src="http://localhost:8080/50/myavatar" alt="Random Avatar" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
