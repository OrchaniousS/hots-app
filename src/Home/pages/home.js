import React from "react";

import MainContainer from "../../Shared/components/mainContainer";
import DateGenerator from "../components/dateGenerator";
import WeeklyApi from "../components/weeklyApi";
import styles from "./home.module.css";

const Home = () => {
  return (
    <MainContainer>
      <div className={styles.homeC}>
        <DateGenerator />
        <div className={styles.weeklyAPI}>
          <WeeklyApi styles={styles} />
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
