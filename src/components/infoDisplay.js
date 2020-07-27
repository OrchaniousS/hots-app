import React from "react";

import styles from "../app.module.css";

const InfoDisplay = (props) => {
  return <div className={styles.displayInfo}>{props.children}</div>;
};

export default InfoDisplay;
