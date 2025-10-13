import type { Colours } from '../types';
import { useStateContext } from '../context/StateContext';
import { colourOptions } from '../config/config';

export const ColourPage = () => {

  const { state, setCarColour } = useStateContext();

  const make = state.car.make;

  const colours = make ? colourOptions[make] : [];

  return (
    <div>
      <h1>Colour for {make}</h1>
      <select
        value={state.car.colour || ''}
        onChange={e => setCarColour(e.target.value as Colours)}
        disabled={!make}
      >
        <option value="" disabled>Select Colour</option>
        {colours.map(colour => (
          <option key={colour} value={colour}>{colour}</option>
        ))}
      </select>
    </div>
  );
};
