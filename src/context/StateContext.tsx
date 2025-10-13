import { createContext, useContext, useState } from 'react';
import type { State, Makes, Colours, Car } from '../types';
import type { ReactNode } from 'react';

const initialState: State = {
  userIsLoggedIn: false,
  car: {},
};

interface StateContextType {
  state: State;
  setUserIsLoggedIn: (loggedIn: boolean) => void;
  setCarMake: (make: Makes) => void;
  setCarColour: (colour: Colours) => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>(initialState);

  const setUserIsLoggedIn = (loggedIn: boolean) => {
    setState((prev) => ({ ...prev, userIsLoggedIn: loggedIn }));
  };

  const setCarMake = (make: Makes) => {
    setState((prev) => ({ ...prev, car: { ...prev.car, make, colour: undefined } }));
  };

  const setCarColour = (colour: Colours) => {
    setState((prev) => ({ ...prev, car: { ...prev.car, colour } }));
  };

  return (
    <StateContext.Provider value={{ state, setUserIsLoggedIn, setCarMake, setCarColour }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) throw new Error('useStateContext must be used within a StateProvider');
  return context;
};
