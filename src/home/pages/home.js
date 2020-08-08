import React, { useState, useEffect } from "react";

import MainContainer from "../../Shared/components/mainContainer";
import weeklyRotation from "../data/weeklyR.json";
import styles from "./home.module.css";

let text = "Weekly Rotation - [July 7th]";

const Home = (props) => {
  const [weekly, setWeekly] = useState(weeklyRotation);

  useEffect(() => {
    setWeekly((weekly) => weekly);
  }, []);

  return (
    <MainContainer>
      <h2>{text}</h2>
      <div className={styles.mapContainer}>
        <div className={styles.mapHexCollage}>
          {weekly.map(({ heroName, heroIcon }) => (
            <div key={heroName}>
              <div className={styles.mapHexIcon}>
                <img
                  className={styles.mapHexIconimg}
                  alt={heroName}
                  src={heroIcon}
                />
              </div>
              <a href={`/heroes/${heroName}`}>
                <div className={styles.mapHexaBG}>
                  <span className={styles.mapHexaBGName}>{heroName}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
