import React from "react";

import styles from "./card.module.css";

const Card = ({ children, type }) => {
  const cardTypeHandler = () => {
    if (type === "counter") {
      return styles.heroInfoCounter;
    }
    if (type === "holder") {
      return styles.heroMainHolder;
    } else {
      return styles.heroMainInfo;
    }
  };

  return <div className={cardTypeHandler()}>{children}</div>;
};

export default Card;
