import React from "react";

import styles from "./infoDisplayCard.module.css";

const InfoDisplayHeroCard = ({
  name,
  title,
  logo,
  atkType,
  health,
  regen,
  resources,
  atkDmg,
  atkSpd,
  atkRng,
  role,
  diff,
  price,
  lore,
}) => {
  const infoHandler = () => {
    return [
      typeof name === "object" ? (
        name.map((hero) => (
          <React.Fragment key={name}>
            <div className={styles.cardInfo}>
              <div className={styles.cardStatsTopContainer}>
                <div className={styles.cardStatsTop}>
                  <div className={styles.cardStatsType}>{role[1]} </div>
                  <div className={styles.cardStatsValue}>{role[0]}</div>
                </div>
                <div className={styles.cardStatsTop}>
                  <div className={styles.cardStatsType}>{diff[1]} </div>
                  <div className={styles.cardStatsValue}>{diff[0]}</div>
                </div>
                <div className={styles.cardStatsTop}>
                  <div className={styles.cardStatsType}>{price[1]} </div>
                  <div className={styles.cardStatsValue}>{price[0]}</div>
                </div>
              </div>
              <div className={styles.cardName}>{hero}</div>
              <div className={styles.cardTitle}>{title}</div>
              <div className={styles.cardQoute}>{lore}</div>
              <div className={styles.cardChildImg}>
                <img alt={logo} src={logo} />
              </div>
              <div className={styles.cardStatsContainer}>
                <div className={styles.cardStats}>
                  <div className={styles.cardStatsType}>{atkType[1]} </div>
                  <div className={styles.cardStatsValue}>{atkType[0]}</div>
                </div>
                <div className={styles.cardStats}>
                  <div className={styles.cardStatsType}>{health[1]} </div>
                  <div className={styles.cardStatsValue}>{health[0]}</div>
                </div>
                <div className={styles.cardStats}>
                  <div className={styles.cardStatsType}>{regen[1]} </div>
                  <div className={styles.cardStatsValue}>{regen[0]}</div>
                </div>
                <div className={styles.cardStats}>
                  <div className={styles.cardStatsType}>{resources[1]} </div>
                  <div className={styles.cardStatsValue}>{resources[0]}</div>
                </div>
                <div className={styles.cardStats}>
                  <div className={styles.cardStatsType}>{atkDmg[1]} </div>
                  <div className={styles.cardStatsValue}>{atkDmg[0]}</div>
                </div>
                <div className={styles.cardStats}>
                  <div className={styles.cardStatsType}>{atkSpd[1]} </div>
                  <div className={styles.cardStatsValue}>{atkSpd[0]}</div>
                </div>
                <div className={styles.cardStats}>
                  <div className={styles.cardStatsType}>{atkRng[1]} </div>
                  <div className={styles.cardStatsValue}>{atkRng[0]}</div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))
      ) : (
        <React.Fragment key={name}>
          <div className={styles.cardInfo}>
            <div className={styles.cardStatsTopContainer}>
              <div className={styles.cardStatsTop}>
                <div className={styles.cardStatsType}>{role[1]} </div>
                <div className={styles.cardStatsValue}>{role[0]}</div>
              </div>
              <div className={styles.cardStatsTop}>
                <div className={styles.cardStatsType}>{diff[1]} </div>
                <div className={styles.cardStatsValue}>{diff[0]}</div>
              </div>
              <div className={styles.cardStatsTop}>
                <div className={styles.cardStatsType}>{price[1]} </div>
                <div className={styles.cardStatsValue}>{price[0]}</div>
              </div>
            </div>
            <div className={styles.cardName}>{name}</div>
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardQoute}>{lore}</div>
            <div className={styles.cardChildImg}>
              <img alt={logo} src={logo} />
            </div>
            <div className={styles.cardStatsContainer}>
              <div className={styles.cardStats}>
                <div className={styles.cardStatsType}>{atkType[1]} </div>
                <div className={styles.cardStatsValue}>{atkType[0]}</div>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.cardStatsType}>{health[1]} </div>
                <div className={styles.cardStatsValue}>{health[0]}</div>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.cardStatsType}>{regen[1]} </div>
                <div className={styles.cardStatsValue}>{regen[0]}</div>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.cardStatsType}>{resources[1]} </div>
                <div className={styles.cardStatsValue}>{resources[0]}</div>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.cardStatsType}>{atkDmg[1]} </div>
                <div className={styles.cardStatsValue}>{atkDmg[0]}</div>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.cardStatsType}>{atkSpd[1]} </div>
                <div className={styles.cardStatsValue}>{atkSpd[0]}</div>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.cardStatsType}>{atkRng[1]} </div>
                <div className={styles.cardStatsValue}>{atkRng[0]}</div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ),
    ];
  };
  return <div className={styles.displayInfoHeroCard}>{infoHandler()}</div>;
};

export default InfoDisplayHeroCard;
