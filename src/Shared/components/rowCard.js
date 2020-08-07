import React from "react";

// import styles from "../app.module.css";
import styles from "./rowcard.module.css";

const RowCard = (props) => {
  return (
    <div style={props.style} className={styles.heroRightInfo}>
      {props.children}
    </div>
  );
};

export default RowCard;
