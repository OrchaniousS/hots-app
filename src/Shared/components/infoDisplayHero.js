import React from "react";

import styles from "./infoDisplay.module.css";

const InfoDisplayHero = ({ children }) => {
  const infoHandler = () => {
    return [
      typeof children === "object" ? (
        <React.Fragment key={children}>
          <div className={styles.displayInfoChild}>{children[0]}</div>
          <div className={styles.displayInfoChild}>{children[1]}</div>
        </React.Fragment>
      ) : (
        <React.Fragment key={children}>
          <div className={styles.displayInfoTitle}>{children}</div>
        </React.Fragment>
      ),
    ];
  };
  return <div className={styles.displayInfoHero}>{infoHandler()}</div>;
};

export default InfoDisplayHero;
