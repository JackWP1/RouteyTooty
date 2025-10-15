import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import { carConfig, makes, type Models } from '../config/config';
import styles from './Page.module.scss';

export const ModelPage = () => {
  const { state, setCarState } = useStateContext();

  const make = state.car.make || makes.Audi; // Default to Audi if make is undefined

  return (
    <div className={styles.component}>
      <h1>Model</h1>
      <select
        value={state.car.model || ''}
        onChange={e => setCarState({ ...state.car, model: e.target.value as Models })}
        className={styles.modelSelect}
      >
        <option value="" >Select Model</option>
        {carConfig[make]?.models.map(model => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>

      <div className={styles.navLink}>
        <Link to="/make">Back to Make</Link> |{' '}
        <Link to="/colour">Go to Colour</Link>
      </div>
    </div>
  );
};
