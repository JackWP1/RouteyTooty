import { SignInOut } from "../components/SignInOut";
import { useStateContext } from "../context/StateContext";
import { Link } from "react-router-dom";

export const LandingPage = () => {
	const { state } = useStateContext();

	const message = state.userAuth.isLoggedIn
		? `Welcome back, ${state.userAuth.userId}!`
		: "Welcome to RouteyTooty!";

	return (
		<div>
			<h1>{message}</h1>
			<p>Your one-stop solution for all routing needs.</p>
			<p>Get started by:</p>
			{state.userAuth.isLoggedIn ? (
				<Link to="/make">Configuring your first car</Link>
			) : (
				<SignInOut inline={true} />
			)}
		</div>
	);
};
