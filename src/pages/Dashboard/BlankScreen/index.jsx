import React from 'react';
import { Container, TicketList } from './styles';

const BlankScreen = () => {

  return (
    <Container>
      <header>Passagens aéreas</header>
      <section>
        <aside>Propaganda</aside>
        <main>
          <div>
            <h1>Lista de passagens</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis magni fugit impedit ullam, totam illo laborum vitae sunt dicta, reprehenderit doloremque recusandae eius sed eveniet laboriosam dolor, voluptates nulla.</p>
          </div>
          <TicketList>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
          </TicketList>
        </main>
        <aside>Propaganda</aside>
      </section>
      <footer>Footer</footer>
    </Container>
  );
}

export default BlankScreen;
