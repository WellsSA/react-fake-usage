import React, { useState } from 'react';
import { Container } from './styles';

const Dashboard = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchToggle = (value) => {
    setSwitchOn(value);
  };

  return (
    <Container>
      <header>
        <button onClick={() => handleSwitchToggle(true)}>Old loading screen</button>
        <button onClick={() => handleSwitchToggle(false)}>New loading screen</button>
      </header>
      <main>
        {/* Your page content goes here */}
        {isSwitchOn ? <p>Switch is ON</p> : <p>Switch is OFF</p>}
      </main>
    </Container>
  );
};

export default Dashboard;