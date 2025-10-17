import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import type { Models, Makes } from '../config/config';
import styles from './Page.module.scss';
import { getCarConfig } from '../ults/config';

export const ModelPage = () => {
  const { state, setCarState } = useStateContext();
  const config = getCarConfig(state);

  const make:Makes = state.car.make || "Ferrari"; // Fallback of Ferrari for now

  return (
    <div className={styles.component}>
      <h1>Model</h1>
      <select
        value={state.car.model || ''}
        onChange={e => setCarState({ ...state.car, model: e.target.value as Models })}
        className={styles.modelSelect}
      >
        <option value="" >Select Model</option>
        {config[make]?.models.map(model => (
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
