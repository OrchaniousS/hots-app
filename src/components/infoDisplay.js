import React from "react";

import styles from "../app.module.css";

const InfoDisplay = (props) => {
  // const hasClassNameHandler = (props.children[0].props.className && "hero" )||(props.children[1].props.className && "it has classname) ;

  const styleHandler = () => {
    return props.children[0].props.className ||
      props.children[1].props.className
      ? `hero ${styles.displayInfoChild}`
      : `${styles.displayInfoChild}`;
  };

  const infoDiv = () => {
    return [
      typeof props.children === "object" ? (
        <React.Fragment key={props.children}>
          {/* {console.log(props.children[0].props.className && "it has classname")}
          {console.log(props.children[1].props.className && "it has classname")} */}
          <div className={styleHandler()}>{props.children[0]}</div>
          <div className={styles.displayInfoChild}>{props.children[1]}</div>
        </React.Fragment>
      ) : (
        <React.Fragment key={props.children}>
          <div
            //  style={hasClassNameHandler}
            className={styles.displayInfoTitle}
          >
            {props.children}
          </div>
        </React.Fragment>
      ),
    ];
  };
  console.log();

  return <div className={styles.displayInfo}>{infoDiv()}</div>;
};

export default InfoDisplay;
