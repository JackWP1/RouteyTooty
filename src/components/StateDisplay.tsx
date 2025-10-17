import { initialState, useStateContext } from '../context/StateContext';
import styles from './StateDisplay.module.scss';

const StateDisplay = () => {
  const { state, setCarState } = useStateContext();
  return (
    <div className={styles.stateDisplay}>
      <pre >
        <h3>Current App State:</h3>
        {JSON.stringify(state, null, 2)}
      </pre>
      <span>For testing:</span>
<button type="button" onClick={() => setCarState({ ...initialState.car })}>Reset Car State </button>
    </div>
  );
};

export default StateDisplay;
