import React from "react";
import { motion } from "framer-motion";

import styles from "./navbar.module.css";
import SearchBar from "../components/searchbar/searchbar";

const Navbar = () => {
  const links = ["Home", "Heroes", "Builds", "Maps"];
  const paths = ["/", "/heroes", "/builds", "/maps"];
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
  }

  const list = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "Inertia",
        delay: 0.5,
        velocity: 220,
      },
      dragTransition: {
        power: 0,
        modifyTarget: (target) => Math.round(target / 50) * 50,
      },
    },
  };

  return (
    <>
      <button id="backTop" className={styles.scrollTop} onClick={topFunction}>
        <div> &#8593;</div>
      </button>
      <header>
        <nav className={styles.navBarResponsive}>
          <div className={styles.titleLogo}>
            <h2>
              <a href={paths[0]}>{title}</a>
            </h2>
            <div className={styles.searchContainer}>
              <SearchBar />
            </div>
          </div>
        </nav>
      </header>
      <footer className={styles.footerResponsive}>
        <motion.ul
          className={styles.navMenu}
          variants={list}
          initial="hidden"
          animate="visible"
        >
          {paths.map((path, i) => (
            <motion.li key={i} variants={list}>
              {path.split("/")[1] === document.location.href.split("/")[3] ? (
                <a id="link" className={styles.active} href={path}>
                  {links[i]}
                </a>
              ) : (
                <a id="link" href={path}>
                  {links[i]}
                </a>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </footer>
    </>
  );
};

export default Navbar;
