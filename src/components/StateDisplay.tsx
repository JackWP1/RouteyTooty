import { useStateContext } from '../context/StateContext';
import styles from './StateDisplay.module.scss';

const StateDisplay = () => {
  const { state } = useStateContext();
  return (
    <pre className={styles['state-display']}>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

export default StateDisplay;
