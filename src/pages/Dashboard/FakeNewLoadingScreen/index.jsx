import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';
import { Container, TicketList, FakeLoading } from './styles';

const FakeNewLoadingScreen = () => {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  useEffect(() => {
    setIsLoading1(true);
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading1(false);
    }, 1000);

    setTimeout(() => {
      setIsLoading2(false);
    }, 6000);
  }, []);

  if(isLoading1) {
    return (
    <Container>
      <FakeLoading>
        <span className="loadingContainer">
          <LoadingIcon />
        </span>  
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
          {isLoading2 ? (
            <FakeLoading>
            <span className="loadingContainer">
              <LoadingIcon />
            </span>  
          </FakeLoading>
          ) : (
            <>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            <li>Passagem aérea  |  Toronto  |  Estocolmo  |  22/09  </li>
            </>
            )}
            </TicketList>
        </main>
        <aside>Propaganda</aside>
      </section>
      <footer>Footer</footer>
    </Container>
  );
}

export default FakeNewLoadingScreen;
