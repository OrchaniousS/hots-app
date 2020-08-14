import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar = (props) => {
  const links = ["Home", "Heroes", "Maps", "Install"];
  const paths = ["/", "/heroes", "/maps", "/install"];
  const title = "Heroes of the Storm";

  window.onscroll = () => {
    scrollFunction();
  };

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  async function scrollFunction() {
    const backButton = await document.querySelector("#backTop");
    return backButton.style === null
      ? ""
      : document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? (backButton.style.display = "block")
      : (backButton.style.display = "none");

    // if (
    //   document.body.scrollTop > 20 ||
    //   document.documentElement.scrollTop > 20
    // ) {
    //   backButton.style.display = "block";
    // } else {
    //   backButton.style.display = "none";
    // }
  }
  return (
    <>
      <header>
        <nav className={styles.navBarResponsive}>
          <div className={styles.titleLogo}>
            <h2>
              <NavLink to={paths[0]}>{title}</NavLink>
            </h2>
          </div>
        </nav>
        <button id="backTop" className={styles.scrollTop} onClick={topFunction}>
          &#8593;
        </button>
      </header>
      <footer className={styles.footerResponsive}>
        <ul className={styles.navMenu}>
          {paths.map((path, i) => {
            return (
              <li key={i}>
                <NavLink activeClassName={styles.activate} exact to={path}>
                  {links[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
};

export default Navbar;
