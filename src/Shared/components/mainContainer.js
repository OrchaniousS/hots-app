import React from "react";

// import styles from "../app.module.css";
import styles from "./mainContainer.module.css";

const MainContainer = (props) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
};

export default MainContainer;
