import React from "react";

import styles from "./infoDisplay.module.css";

const InfoDisplayCouSyn = (props) => {
  const infoMultiHandler = () => {
    return [
      <React.Fragment key={props.headVal}>
        <div className={styles.displayInfoChild}>{props.headVal}</div>
        <div className={styles.displayInfoChild}>{props.value}</div>
      </React.Fragment>,
    ];
  };
  return <div className={styles.displayInfoCouSyn}> {infoMultiHandler()}</div>;
};

export default InfoDisplayCouSyn;
