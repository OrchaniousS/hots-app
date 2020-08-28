import React from "react";

import styles from "./rowcard.module.css";

const RowCard = ({ children, type, style }) => {
  const rowCardTypeHandler = () => {
    if (type === "counter") {
      return styles.heroInfoCounter;
    } else {
      return styles.heroInfo;
    }
  };
  return (
    <div style={style} className={rowCardTypeHandler()}>
      {children}
    </div>
  );
};

export default RowCard;
