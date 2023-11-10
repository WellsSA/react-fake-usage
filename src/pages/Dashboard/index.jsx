import React, { useState } from 'react';
import { Container } from './styles';
import FakeOldLoadingScreen from './FakeOldLoadingScreen';


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
        <button onClick={() => handleSwitchChange(SWITCH_STATES.OLD)}>Old</button>
        <button onClick={() => handleSwitchChange(SWITCH_STATES.NEW)}>New</button>
      </header>
      <main>

        {switchState === SWITCH_STATES.INITIAL && <FakeOldLoadingScreen />}
        {switchState === SWITCH_STATES.OLD && <p>OLD state</p>}
        {switchState === SWITCH_STATES.NEW && <p>new state</p>}
      </main>
    </Container>
  );
};

export default Dashboard;