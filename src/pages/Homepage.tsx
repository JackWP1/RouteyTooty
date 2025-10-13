import { useStateContext } from '../context/StateContext';

export const Homepage = () => {
  const { state, setUserIsLoggedIn } = useStateContext();
  return (
    <div>
      <h1>Homepage</h1>
      <label htmlFor="login-status">Login Status:</label>
      <select
        value={state.userIsLoggedIn ? 'Logged In' : 'Logged Out'}
        onChange={e => setUserIsLoggedIn(e.target.value === 'Logged In')}
      >
        <option value="Logged Out">Logged Out</option>
        <option value="Logged In">Logged In</option>
      </select>
    </div>
  );
};
