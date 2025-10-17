import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckCarType } from "./CheckCarType.tsx";
import { ColourPage } from "../pages/ColourPage.tsx";
import { CompletePage } from "../pages/CompletePage.tsx";
import { LandingPage } from "../pages/LandingPage.tsx";
import { MakePage } from "../pages/MakePage.tsx";
import { ModelPage } from "../pages/ModelPage.tsx";
import { Navigation } from "./Navigation.tsx";
import { RouteGuard } from "./RouteGuard.tsx";
import { SignInOut } from "./SignInOut.tsx";
import { useStateContext } from "../context/StateContext.tsx";
import StateDisplay from "./StateDisplay.tsx";

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
				<Route index path="home" element={<LandingPage />} />
				<Route element={<CheckCarType state={state} />}>
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
				</Route>
				<Route path="*" element={<p>There's nothing here: 404!</p>} />
			</Routes>
		</BrowserRouter>
	);
};
