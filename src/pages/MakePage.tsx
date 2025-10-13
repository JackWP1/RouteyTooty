import { makes } from '../config/config';
import { useStateContext } from '../context/StateContext';
import type { Makes } from '../types';


export const MakePage = () => {
  const { state, setCarMake } = useStateContext();
  return (
    <div>
      <h1>Make</h1>
      <label htmlFor="car-make">Car Make:</label>
      <select
        value={state.car.make || ''}
        onChange={e => setCarMake(e.target.value as Makes)}
      >
        <option value="" disabled>Select Make</option>
        {makes.map(make => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
    </div>
  );
};
