import { carConfig, type Makes } from '../config/config';
import { useStateContext } from '../context/StateContext';
import { Link } from 'react-router-dom';
import styles from './Page.module.scss';

export const MakePage = () => {
  const { state, setCarState } = useStateContext();
  return (
    <div className={styles.component}>
      <h1>Make</h1>
      <label htmlFor="car-make">Car Make:</label>
      <select
        value={state.car.make || ''}
        onChange={e => setCarState({ ...state.car, make: e.target.value as Makes})}
        className={styles.makeSelect}
      >
        <option value="" disabled>Select Make</option>
        {Object.keys(carConfig).map(make => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
      <div className={styles.navLink}>
        <Link to="/home">Back to Homepage</Link> |{' '}
        <Link to="/model">Go to Model Page</Link>
      </div>
    </div>
  );
};
