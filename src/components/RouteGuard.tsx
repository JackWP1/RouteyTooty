import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

type RouteGuardProps = {
  children?: React.ReactNode;
};

export const RouteGuard = ({ children }: RouteGuardProps) => {
	const { state } = useStateContext();
	if (!state.car.make) {
		return <Navigate to="/make" replace />;
	}
	if (!state.car.model) {
		return <Navigate to="/model" replace />;
	}
	if (!state.car.colour) {
		return <Navigate to="/colour" replace />;
	}
	return children ? children : <Outlet />;
};
