import React from "react";

import styles from "./infoDisplay.module.css";

const InfoDisplay = ({ children }) => {
  const infoDiv = () => {
    return [
      typeof children === "object" ? (
        <React.Fragment key={children}>
          <div className={styles.displayInfoChild}>{children[0]}</div>
          <div className={styles.displayInfoChild}>{children[1]}</div>
        </React.Fragment>
      ) : (
        <React.Fragment key={children}>{children}</React.Fragment>
      ),
    ];
  };

  return <div className={styles.displayInfo}>{infoDiv()}</div>;
};

export default InfoDisplay;
