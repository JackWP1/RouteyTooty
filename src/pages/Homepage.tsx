import styles from './Homepage.module.scss';

export const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <h1>Homepage</h1>
      <label htmlFor="login-status">Login Status:</label>
    </div>
  );
};
