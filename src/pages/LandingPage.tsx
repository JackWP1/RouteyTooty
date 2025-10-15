import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { SignInOut } from "../components/SignInOut";
import styles from "./Page.module.scss";

export const LandingPage = () => {
	const { state } = useStateContext();

	const message = state.userAuth.isLoggedIn
		? `Welcome back, ${state.userAuth.userId}!`
		: "Welcome to RouteyTooty!";

	return (
		<div className={styles.component}>
			<h1>{message}</h1>
			<p>Your one-stop solution for all routing needs.</p>
			<p>Get started by:</p>
			{state.userAuth.isLoggedIn ? (
				<Link to="/make">Configuring your first car</Link>
			) : (
				<>
					<SignInOut inline={true} />

					<p>OR</p>

					<Link to="/make">Configuring your first car without an account</Link>
				</>
			)}
		</div>
	);
};
