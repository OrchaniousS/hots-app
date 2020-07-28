import React from "react";

import styles from "./infoDisplay.module.css";

const InfoDisplayMulti = (props) => {
  //   console.log(typeof props.headVal, typeof props.value);

  const infoMultiHandler = () => {
    return [
      <React.Fragment key={props.headVal}>
        <div className={styles.displayInfoChild}>{props.headVal}</div>
        <div className={styles.displayInfoChild}>{props.value}</div>
      </React.Fragment>,
    ];
  };
  return <div className={styles.displayInfo}> {infoMultiHandler()}</div>;
};

export default InfoDisplayMulti;
