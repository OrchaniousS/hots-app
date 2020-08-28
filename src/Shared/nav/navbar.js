import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar = () => {
  const links = ["Home", "Heroes", "Maps"];
  const paths = ["/", "/heroes", "/maps"];
  const title = "Heroes of the Storm";

  window.addEventListener("beforeinstallprompt", (e) => {
    let deferredPrompt;
    const addBtn = document.querySelector("#addButton");
    addBtn.style.display = "none";
    console.log(addBtn);
    e.preventDefault();

    deferredPrompt = e;

    addBtn.style.display = "block";

    addBtn.addEventListener("click", (e) => {
      addBtn.style.display = "none";

      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  });

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
                <a
                  // activeClassName={styles.activate}
                  href={path}
                >
                  {links[i]}
                </a>
              </li>
            );
          })}
          <li id="addButton" className={styles.activate}>
            Install
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Navbar;
