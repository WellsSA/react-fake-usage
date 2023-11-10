import React, { useState } from 'react';
import { Container } from './styles';
import FakeOldLoadingScreen from './FakeOldLoadingScreen';
import FakeNewLoadingScreen from './FakeNewLoadingScreen';
import BlankScreen from './BlankScreen';


const Dashboard = () => {
  const SWITCH_STATES = {
    INITIAL: 'initial',
    OLD: 'old',
    NEW: 'new',
  };

  const [switchState, setSwitchState] = useState(SWITCH_STATES.INITIAL);

  const handleSwitchChange = (state) => {
    setSwitchState(state);
  };


  return (
    <Container>
      <header>
        <button onClick={() => handleSwitchChange(SWITCH_STATES.INITIAL)}>Reset</button>
        <button onClick={() => handleSwitchChange(SWITCH_STATES.OLD)}>Old web screen</button>
        <button onClick={() => handleSwitchChange(SWITCH_STATES.NEW)}>New web screen</button>
      </header>
      <main>

        {switchState === SWITCH_STATES.INITIAL && <BlankScreen />}
        {switchState === SWITCH_STATES.OLD && <FakeOldLoadingScreen />}
        {switchState === SWITCH_STATES.NEW && <FakeNewLoadingScreen />}
      </main>
    </Container>
  );
};

export default Dashboard;