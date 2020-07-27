import React from "react";

import styles from "../app.module.css";

const Card = (props) => {
  return <div className={styles.heroMainInfo}>{props.children}</div>;
};

export default Card;
