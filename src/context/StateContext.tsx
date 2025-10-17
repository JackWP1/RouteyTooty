import { createContext, useContext, useEffect, useState } from "react";
import type { State, Car, Auth } from "../types";
import type { ReactNode } from "react";
import { persistence } from "../ults/persist";

export const initialState: State = {
	userAuth: {
		isLoggedIn: false,
		userId: "",
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

	const loadSavedState = async (userId = "") => {
		const persistedState = await persistence.loadInitialDataState(userId);
		if (persistedState) {
			setState(persistedState);
		}
	};

	// Load persisted state on mount
	// biome-ignore lint/correctness/useExhaustiveDependencies: Only needs to run once on mount - hence the empty array
	useEffect(() => {
		loadSavedState();
	}, []);

	// Load persisted state when userId changes
	// biome-ignore lint/correctness/useExhaustiveDependencies: Only needs to run when userId changes
	useEffect(() => {
    const id = state.userAuth.userId;
    if(!id) return;
		loadSavedState(id);
	}, [state.userAuth.userId]);

	// Persist state on any change
	// But this could be optimized save only specific parts of the state change
	useEffect(() => {
		persistence.saveDataState(state);
	}, [state]);

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
	if (!context)
		throw new Error("useStateContext must be used within a StateProvider");
	return context;
};
