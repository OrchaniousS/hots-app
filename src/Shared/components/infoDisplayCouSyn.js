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

  const styleHandler = () => {
    if (props.type === "counter") {
      return styles.displayInfoCou;
    }
    if (props.type === "synergy") {
      return styles.displayInfoSyn;
    }
    if (
      props.type === "stronger" ||
      props.type === "average" ||
      props.type === "weaker"
    ) {
      return styles.displayInfoSynCouMap;
    }
  };

  return (
    <div id="tableCouSyn" className={styleHandler()}>
      {infoMultiHandler()}
    </div>
  );
};

export default InfoDisplayCouSyn;
