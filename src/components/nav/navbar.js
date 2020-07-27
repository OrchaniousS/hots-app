import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../../app.module.css";

window.onscroll = () => {
  scrollFunction();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

async function scrollFunction() {
  const backButton = document.querySelector("#backTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}
const Navbar = (props) => (
  <div>
    <nav className={styles.navBarResponsive}>
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

    <button id="backTop" className={styles.scrollTop} onClick={topFunction}>
      &#8593;
    </button>
  </div>
);

export default Navbar;
