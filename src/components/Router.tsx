import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import {Homepage} from "../pages/Homepage.tsx";
import { MakePage} from "../pages/MakePage.tsx";
import {ColourPage} from "../pages/ColourPage.tsx";

export const Router = () => {
	const { state } = useStateContext();
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/make" element={<MakePage />} />
				<Route
					path="/colour"
					element={
						state.car.make ? <ColourPage /> : <Navigate to="/make" replace />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

