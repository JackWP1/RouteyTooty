import { useStateContext } from '../context/StateContext';
import styles from './StateDisplay.module.scss';

const StateDisplay = () => {
  const { state } = useStateContext();
  return (
    <pre className={styles['state-display']}>
      <h3>Current App State:</h3>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

export default StateDisplay;
