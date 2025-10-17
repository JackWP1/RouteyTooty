import { Link } from "react-router-dom";
import type { CarTypes } from "../config/config";
import { useStateContext } from "../context/StateContext";
import styles from "./Page.module.scss";
import { useState } from "react";

export const CarTypePage = () => {
	const { state, setCarState } = useStateContext();

	const [selectedCarType, setSelectedCarType] = useState<CarTypes | undefined>(
		undefined,
	);

	const handleCarTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value as CarTypes;
		console.log(value);
		setSelectedCarType(value);
	};

	return (
		<div className={styles.component}>
			<h1>What sort of car are you looking for?</h1>
			<input
				type="radio"
				name="car-type"
				value="Sporty"
				onChange={(e) => handleCarTypeChange(e)}
			/>
			<label htmlFor="Sporty">Sporty</label>
			<input
				type="radio"
				name="car-type"
				value="Practical"
				onChange={(e) => handleCarTypeChange(e)}
			/>
			<label htmlFor="Practical">Practical</label>

			<button
				type="submit"
				disabled={!selectedCarType}
				onClick={() => setCarState({ ...state.car, carType: selectedCarType })}
			>
				Set Car Type
			</button>
			<div className={styles.navLink}>
				<Link to="/home">Back to Homepage</Link> |{" "}
				<Link to="/model">Go to Model Page</Link>
			</div>
		</div>
	);
};
