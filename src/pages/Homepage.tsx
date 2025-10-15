import { Navigation } from '../components/Navigation';
import { useStateContext } from '../context/StateContext';
import styles from './Page.module.scss';

export const Homepage = () => {
  const { state } = useStateContext();
  return (
    <div className={styles.component}>
      <h1>Homepage</h1>
      <label htmlFor="login-status">Login Status: {state.userAuth.isLoggedIn ? "Logged In" : "Logged Out"}</label>
      <Navigation />
    </div>
  );
};
