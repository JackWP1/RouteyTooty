import { useStateContext } from "../context/StateContext";
import styles from './Page.module.scss';

export const CompletePage = () => {
    const { state } = useStateContext();
  return (
    <div className={styles.component}>
      <h1>Configuration Complete</h1>
      <p>Your car configuration has been saved!</p>
      <ul>
        <li>Make: {state.car.make}</li>
        <li>Model: {state.car.model}</li>
        <li>Colour: {state.car.colour}</li>
      </ul>
    </div>
  );
};
