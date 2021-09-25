import React, { createContext, useContext } from 'react';
import { appCounter } from '../stores/counter';

export const StoreContext = createContext({
  appCounter: appCounter,
});

export const useStore = () => useContext(StoreContext);
