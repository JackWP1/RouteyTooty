import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => (
  <nav className={styles.nav}>
    <Link to="/">Landing</Link>
    <Link to="/home">Home</Link>
    <Link to="/make">Make</Link>
    <Link to="/model">Model</Link>
    <Link to="/colour">Colour</Link>
  </nav>
);