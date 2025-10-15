import { Navigate, Outlet } from "react-router-dom";

type RouteGuardProps = {
	isAllowed: boolean;
	redirectPath?: string;
  children?: React.ReactNode;
};

export const RouteGuard = ({ isAllowed, redirectPath = "/", children }: RouteGuardProps) => {
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}
	return children ? children : <Outlet />;
};
