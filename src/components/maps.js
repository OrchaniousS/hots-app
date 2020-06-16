import React from "react";

import styles from "../app.module.css";

const Maps = (props) => (
  <div className={styles.mainContent}>
    <div className={styles.container}>
      <h2>{props.title}</h2>
    </div>
  </div>
);

export default Maps;
