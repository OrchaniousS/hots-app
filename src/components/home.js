import React from "react";

import styles from "../app.module.css";

const Home = (props) => (
  <div className={styles.mainContent}>
    <div className={styles.container}>
      <div>future brawl random weekly</div>
      <h2>{props.title}</h2>
      <div className={styles.homeImg}></div>
      <div className={styles.thumbnailContainer}>
        <div className={styles.thumbnail1}></div>
        <div className={styles.thumbnail2}></div>
        <div className={styles.thumbnail3}></div>
      </div>
    </div>
  </div>
);

export default Home;
