import React from "react";

import styles from "./infoDisplayCard.module.css";

const InfoDisplayHeroCard = ({ name, title, logo }) => {
  const infoHandler = () => {
    return [
      typeof name === "object" ? (
        <React.Fragment key={name}>
          <div className={styles.displayInfoCard}>
            <div className={styles.displayInfoCardChild}>{name}</div>
            <div className={styles.displayInfoCardChild}>{title}</div>
            <div className={styles.displayInfoCardChildImg}>
              <img alt={logo} src={logo} />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment key={name}>
          <div className={styles.displayInfoCard}>
            <div className={styles.displayInfoCardChild}>{name}</div>
            <div className={styles.displayInfoCardChild}>{title}</div>
            <div className={styles.displayInfoCardChildImg}>
              <img alt={logo} src={logo} />
            </div>
          </div>
        </React.Fragment>
      ),
    ];
  };
  return <div className={styles.displayInfoHeroCard}>{infoHandler()}</div>;
};

export default InfoDisplayHeroCard;
