import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';
import { Container, TicketList, FakeLoading } from './styles';

const FakeOldLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);
  if(isLoading) {
    return (
    <Container>
      <FakeLoading>
          <LoadingIcon />
      </FakeLoading>
    </Container>
    );

  }

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

export default FakeOldLoadingScreen;
