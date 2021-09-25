import { StoreContext } from './context/store';
import React from 'react';
import { appCounter } from './stores/counter';
import { Counter } from './component/Counter';

const value = {
  appCounter: appCounter
}

const App: React.FC = () => {

  return (
    <StoreContext.Provider value={value}>
      <Counter />
    </StoreContext.Provider>
  )
}

export default App;
