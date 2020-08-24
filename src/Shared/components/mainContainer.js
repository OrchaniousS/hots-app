import React from "react";

// import styles from "../app.module.css";
import styles from "./mainContainer.module.css";

const MainContainer = ({ type, children }) => {
  const containerStyleHandler = () => {
    if (type === "heroContainer") {
      return styles.heroContainer;
    } else {
      return styles.container;
    }
  };

  return (
    <div className={styles.mainContent}>
      <div className={containerStyleHandler()}>{children}</div>
    </div>
  );
};

export default MainContainer;
