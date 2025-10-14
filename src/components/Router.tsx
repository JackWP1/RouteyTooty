import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { Homepage } from "../pages/Homepage.tsx";
import { MakePage } from "../pages/MakePage.tsx";
import { ColourPage } from "../pages/ColourPage.tsx";
import { SignInOut } from "./SignInOut.tsx";
import { LandingPage } from "../pages/LandingPage.tsx";
import { Navigation } from "./Navigation.tsx";
import StateDisplay from "./StateDisplay.tsx";
import { ModelPage } from "../pages/ModelPage.tsx";

export const Router = () => {
	const { state } = useStateContext();
	return (
		<BrowserRouter>
			<Navigation />
			<SignInOut />
			<StateDisplay />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/make" element={<MakePage />} />
				<Route path="/model" element={<ModelPage />} />
				<Route
					path="/colour"
					element={
						state.car.make ? <ColourPage /> : <Navigate to="/make" replace />
					}
				/>
				<Route path="*" element={<p>There's nothing here: 404!</p>} />
			</Routes>
		</BrowserRouter>
	);
};
