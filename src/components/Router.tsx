import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage.tsx";
import { MakePage } from "../pages/MakePage.tsx";
import { ColourPage } from "../pages/ColourPage.tsx";
import { SignInOut } from "./SignInOut.tsx";
import { LandingPage } from "../pages/LandingPage.tsx";
import { Navigation } from "./Navigation.tsx";
import StateDisplay from "./StateDisplay.tsx";
import { ModelPage } from "../pages/ModelPage.tsx";
import { CompletePage } from "../pages/CompletePage.tsx";
import { RouteGuard } from "./RouteGuard.tsx";
import { useStateContext } from "../context/StateContext.tsx";

export const Router = () => {
	const { state } = useStateContext();
	const isMakeSelected = !!state.car.make;
	const isModelSelected = isMakeSelected && !!state.car.model;
	const isColourSelected = isModelSelected && !!state.car.colour;
	return (
		<BrowserRouter>
			<Navigation />
			<SignInOut />
			<StateDisplay />
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path="home" element={<Homepage />} />
				<Route path="make" element={<MakePage />} />
				<Route element={<RouteGuard isAllowed={isMakeSelected} redirectPath="/make" />}>
					<Route path="model" element={<ModelPage />} />
				</Route>
				<Route element={<RouteGuard isAllowed={isModelSelected} redirectPath="/model" />}>
					<Route path="colour" element={<ColourPage />} />
				</Route>
				<Route element={<RouteGuard isAllowed={isColourSelected} redirectPath="/colour" />}>
					<Route path="complete" element={<CompletePage />} />
				</Route>
				<Route path="*" element={<p>There's nothing here: 404!</p>} />
			</Routes>
		</BrowserRouter>
	);
};
