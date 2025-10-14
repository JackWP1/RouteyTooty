import { useState } from "react";
import { useStateContext } from "../context/StateContext";
import styles from "./SignInOut.module.scss";

export const SignInOut = ({inline = false}: {inline?: boolean}) => {
	const { state, setUserAuth, setCarState } = useStateContext();
	const [userString, setUserString] = useState<string>(
		state.userAuth.userId || "",
	);

	const handleSignIn = () => {
		if (userString) {
			setUserAuth({ isLoggedIn: true, userId: userString });
			return;
		}

		setUserAuth({ isLoggedIn: false, userId: "" });
		const input = document.querySelector("input");
		input?.focus();
	};

    const handleSignOut = () => {
        setUserAuth({ isLoggedIn: false, userId: "" });
        setCarState({});
        setUserString("");
    }

	return (
		<div className={inline ? styles.inlineComponent : styles.component}>
			{state.userAuth.isLoggedIn ? (
				<>
				<p>Signed in as {state.userAuth.userId}</p>
				<button
					type="button"
					onClick={handleSignOut}
				>
					Sign out
				</button>
                </>
			) : (
				<fieldset>
					<input
						type="text"
						value={userString}
						onChange={(e) => setUserString(e.target.value)}
					/>
					<button type="button" onClick={handleSignIn}>
						Sign in
					</button>
				</fieldset>
			)}
		</div>
	);
};

