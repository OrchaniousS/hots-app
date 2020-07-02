import React from "react";
import styles from "../app.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => (
  <nav>
    <h2>
      <NavLink to={props.paths[0]}>{props.title}</NavLink>
    </h2>
    <ul className={styles.navMenu}>
      <li>
        <NavLink activeClassName={styles.activate} exact to={props.paths[0]}>
          {props.links[0]}
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.activate} exact to={props.paths[1]}>
          {props.links[1]}
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.activate} exact to={props.paths[2]}>
          {props.links[2]}
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
