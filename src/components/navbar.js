import React from "react";
import styles from "../app.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => (
  <nav>
    <h2>
      <NavLink to="/">{props.title}</NavLink>
    </h2>
    <ul className={styles.navMenu}>
      <li>
        <NavLink activeClassName={styles.activate} exact to="/">
          {props.links[0]}
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.activate} to="/heroes">
          {props.links[1]}
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.activate} to="/maps">
          {props.links[2]}
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
