import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../../redux/userRedux';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const user = useSelector(getUser);
  return (
    <nav className={styles.root}>
      <h1>Portfolio</h1>
      <div className={styles.links}>
        <NavLink className={styles.navlink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navlink} to="/aboutme">
          About me
        </NavLink>
        <NavLink className={styles.navlink} to="/contact">
          Contact
        </NavLink>
        {!user && (
          <NavLink className={styles.navlink} to="/register">
            Register
          </NavLink>
        )}

        {!user && (
          <NavLink className={styles.navlink} to="/login">
            Login
          </NavLink>
        )}

        {user && (
          <NavLink className={styles.navlink} to="/logout">
            Logout
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
