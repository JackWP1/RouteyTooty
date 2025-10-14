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

export const Router = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<SignInOut />
			<StateDisplay />
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path="home" element={<Homepage />} />
				<Route path="make" element={<MakePage />} />
				<Route element={<RouteGuard />}>
					<Route path="model" element={<ModelPage />} />
					<Route path="colour" element={<ColourPage />} />
				</Route>
				<Route path="complete" element={<CompletePage />} />
				<Route path="*" element={<p>There's nothing here: 404!</p>} />
			</Routes>
		</BrowserRouter>
	);
};
