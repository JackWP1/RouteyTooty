import { createContext, useContext, useState } from 'react';
import type { State, Car, Auth } from '../types';
import type { ReactNode } from 'react';

const initialState: State = {
  userAuth: {
    isLoggedIn: false,
    userId: ''
  },
  car: {},
};

interface StateContextType {
  state: State;
  setUserAuth: (auth: Auth) => void;
  setCarState: (car: Car) => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>(initialState);

  const setUserAuth = (auth: Auth) => {
    setState((prev) => ({ ...prev, userAuth: auth }));
  };

  const setCarState = (car: Car) => {
    setState((prev) => ({ ...prev, car }));
  };

  return (
    <StateContext.Provider value={{ state, setUserAuth, setCarState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) throw new Error('useStateContext must be used within a StateProvider');
  return context;
};
