import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>21 de Setembro</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time>
          <strong>08:00</strong>
          <span>Ricardo</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Horário disponível</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>João</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Lucas</span>
        </Time>
      </ul>
    </Container>
  );
}

export default Dashboard;
