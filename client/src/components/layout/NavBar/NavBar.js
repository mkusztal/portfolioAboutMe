import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUser } from "../../../redux/userRedux";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(getUser);

  return (
    <nav className={styles.navigation}>
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaBars className={styles.icon} />
      </button>
      <div className={isOpen ? styles.mobile_menu : styles.nav_menu}>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.navlink} to="/">
              Home
            </NavLink>
          </li>

          <li className={styles.dropdown}>
            About
            <div className={styles.dropdown_content}>
              <NavLink className={styles.navlink} to="/aboutme">
                Me
              </NavLink>
              <NavLink className={styles.navlink} to="/abilities">
                Abilities
              </NavLink>
              <NavLink className={styles.navlink} to="/projects">
                Projects
              </NavLink>
            </div>
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
      </div>
    </nav>
  );
};

export default NavBar;
