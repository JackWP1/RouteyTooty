import { useStateContext } from '../context/StateContext';
import { Link } from 'react-router-dom';
import styles from './Page.module.scss';
import { getCarConfig } from '../ults/config';
import type { Colours, Makes } from '../config/config';

export const ColourPage = () => {
  const { state, setCarState } = useStateContext(); 

  const config = getCarConfig(state);

  const make: Makes = state.car.make || "Ferrari"; // Fallback of Ferrari for now

  return (
    <div className={styles.component}>
      <h1>Colour for {make} {state.car.model}</h1>
      <select
        value={state.car.colour || ''}
        onChange={e => setCarState({ ...state.car, colour: e.target.value as Colours })}
        disabled={!make}
        className={styles.colourSelect}
      >
        <option value="" disabled>Select Colour</option>
        {config[make]?.colours.map(colour => (
          <option key={colour} value={colour}>{colour}</option>
        ))}
      </select>
      <div className={styles.navLinkComplete}>
        <Link to="/complete">Complete</Link>
      </div>
      <div className={styles.navLink}>
        <Link to="/home">Back to Homepage</Link> |{' '}
        <Link to="/model">Back to Model Page</Link>
      </div>
    </div>
  );
};
