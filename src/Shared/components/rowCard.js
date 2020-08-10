import React from "react";

// import styles from "../app.module.css";
import styles from "./rowcard.module.css";

const RowCard = (props) => {
  const { type, children } = props;
  const wrapStyleHandler = () => {
    if (type === "wrapper") {
      return styles.heroRightInfoWrapper;
    } else {
      return styles.heroRightInfo;
    }
  };
  return (
    <div style={props.style} className={wrapStyleHandler()}>
      {children}
    </div>
  );
};

export default RowCard;
