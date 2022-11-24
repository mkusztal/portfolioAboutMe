import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../../redux/userRedux';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const user = useSelector(getUser);
  return (
    <header>
      {/* <h1>Portfolio</h1> */}
      <img
        className={styles.logo}
        src="/images/ME_logo.png"
        alt="moni_entertainment_logo"
      ></img>
      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.navlink} to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className={styles.navlink} to="/aboutme">
              About me
            </NavLink>
          </li>

          <li>
            <NavLink className={styles.navlink} to="/contact">
              Contact
            </NavLink>
          </li>

          <li>
            {!user && (
              <NavLink className={styles.navlink} to="/register">
                Register
              </NavLink>
            )}
          </li>

          <li>
            {!user && (
              <NavLink className={styles.navlink} to="/login">
                Login
              </NavLink>
            )}
          </li>

          <li>
            {user && (
              <NavLink className={styles.navlink} to="/logout">
                Logout
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
