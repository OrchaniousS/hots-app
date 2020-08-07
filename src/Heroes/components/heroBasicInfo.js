import React from "react";

import InfoDisplay from "../../Shared/components/infoDisplay";
import RowCard from "../../Shared/components/rowCard";

import data from "../data/heroStats.json";
import styles from "../../app.module.css";

const Herobasic = (props) => {
  const { heroIdTagger } = props;
  const heroStatsJson = JSON.parse(JSON.stringify(data));

  return (
    <div className={styles.basicInfo} key={heroIdTagger}>
      <RowCard>
        <InfoDisplay>
          <div>Role</div>
          <div>{heroStatsJson[heroIdTagger].basicInfo.role}</div>
        </InfoDisplay>
        <InfoDisplay>
          <div>Difficulty</div>
          <div>{heroStatsJson[heroIdTagger].basicInfo.difficulty}</div>
        </InfoDisplay>
        <InfoDisplay>
          <div>Price</div>
          <div>{heroStatsJson[heroIdTagger].basicInfo.price + " Gold"}</div>
        </InfoDisplay>
      </RowCard>
      <RowCard>
        <InfoDisplay>
          <div>Lore</div>
          <div>{heroStatsJson[heroIdTagger].basicInfo.qoute}</div>
        </InfoDisplay>
      </RowCard>
    </div>
  );
};

export default Herobasic;
