import { useStateContext } from '../context/StateContext';
import { carConfig, type Colours } from '../config/config';
import { Link } from 'react-router-dom';
import styles from './ColourPage.module.scss';

export const ColourPage = () => {
  const { state, setCarState } = useStateContext();
  const make = state.car.make;
  const colours = make ? carConfig[make]?.colours : [];

  return (
    <div className={styles.colourPage}>
      <h1>Colour for {make}</h1>
      <select
        value={state.car.colour || ''}
        onChange={e => setCarState({ ...state.car, colour: e.target.value as Colours })}
        disabled={!make}
        className={styles.colourSelect}
      >
        <option value="" disabled>Select Colour</option>
        {colours.map(colour => (
          <option key={colour} value={colour}>{colour}</option>
        ))}
      </select>
      <div className={styles.navLink}>
        <Link to="/make">Back to Make Page</Link>
      </div>
    </div>
  );
};
