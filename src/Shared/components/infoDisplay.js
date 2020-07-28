import React from "react";

import styles from "./infoDisplay.module.css";

const InfoDisplay = (props) => {
  const infoDiv = () => {
    return [
      typeof props.children === "object" ? (
        <React.Fragment key={props.children}>
          <div className={styles.displayInfoChild}>{props.children[0]}</div>
          <div className={styles.displayInfoChild}>{props.children[1]}</div>
        </React.Fragment>
      ) : (
        <React.Fragment key={props.children}>
          <div className={styles.displayInfoTitle}>{props.children}</div>
        </React.Fragment>
      ),
    ];
  };

  return <div className={styles.displayInfo}>{infoDiv()}</div>;
};

export default InfoDisplay;