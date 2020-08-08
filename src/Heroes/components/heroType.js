import React, { useState } from "react";

import Card from "../../Shared/components/card";
import RowCard from "../../Shared/components/rowCard";
import InfoDisplay from "../../Shared/components/infoDisplay";
import InfoDisplayHero from "../../Shared/components/infoDisplayHero";
import InfoDisplayMulti from "../../Shared/components/infoDisplayMulti";

import data from "../data/heroStats.json";
import imgData from "../data/heroData.json";
import styles from "../../app.module.css";

const Herotype = (props) => {
  const { heroIdTagger } = props;
  const heroStatsJson = JSON.parse(JSON.stringify(data));
  const heroImage = JSON.parse(JSON.stringify(imgData));

  const [displayStats, setDisplayStats] = useState(false);

  const displayStatsHandler = () => {
    displayStats === true ? setDisplayStats(false) : setDisplayStats(true);
  };

  // const wrapStyle = { "flex-wrap": "wrap" };

  const heroType = heroStatsJson[heroIdTagger].basicInfo.name;

  function renderHeroType(type) {
    let template = null;
    switch (type) {
      case "singleHero":
        template = (
          <React.Fragment>
            <RowCard>
              <div className={styles.singleHero}>
                <InfoDisplayHero>
                  {heroStatsJson[heroIdTagger].basicInfo.name}
                </InfoDisplayHero>
                <InfoDisplayHero>
                  <div className={styles.heroTitle}>
                    {heroStatsJson[heroIdTagger].basicInfo.title}
                  </div>
                  <div className={styles.heroTitleImg}>
                    <img
                      alt="miniIconhero"
                      src={heroImage[heroIdTagger].logo}
                    />
                  </div>
                </InfoDisplayHero>
              </div>
            </RowCard>
            <RowCard>
              <InfoDisplayHero>
                <div onClick={() => displayStatsHandler()}>
                  Click to expand{" "}
                </div>
                <div>Hero stats</div>
              </InfoDisplayHero>
            </RowCard>
            {displayStats === true ? (
              <RowCard>
                <InfoDisplay>
                  <div>Attack Type</div>
                  <div>{heroStatsJson[heroIdTagger].baseStats.attackType}</div>
                </InfoDisplay>
                <InfoDisplay>
                  <div>Health</div>
                  <div>
                    {heroStatsJson[heroIdTagger].baseStats.health !== ""
                      ? heroStatsJson[heroIdTagger].baseStats.health
                      : "None"}
                  </div>
                </InfoDisplay>
                <InfoDisplay>
                  <div>Regen</div>
                  <div>
                    {heroStatsJson[heroIdTagger].baseStats.healthRegen !== ""
                      ? heroStatsJson[heroIdTagger].baseStats.healthRegen
                      : "None"}
                  </div>
                </InfoDisplay>
                <InfoDisplay>
                  <div>Resources</div>
                  <div>
                    {heroStatsJson[heroIdTagger].baseStats.resourceAmount !==
                      " " &&
                    heroStatsJson[heroIdTagger].baseStats.resourceAmount
                      .length < 1
                      ? "None"
                      : heroStatsJson[heroIdTagger].baseStats.resourceAmount +
                        " "}
                    {heroStatsJson[heroIdTagger].baseStats.resourceType ===
                    "None"
                      ? ""
                      : heroStatsJson[heroIdTagger].baseStats.resourceType}
                  </div>
                </InfoDisplay>
                <InfoDisplay>
                  <div>Attack Damge</div>
                  <div>
                    {heroStatsJson[heroIdTagger].baseStats.attackDamage !== ""
                      ? heroStatsJson[heroIdTagger].baseStats.attackDamage
                      : "None"}
                  </div>
                </InfoDisplay>
                <InfoDisplay>
                  <div>Attack Speed</div>
                  <div>
                    {heroStatsJson[heroIdTagger].baseStats.attackSpeed !== ""
                      ? heroStatsJson[heroIdTagger].baseStats.attackSpeed
                      : "None"}
                  </div>
                </InfoDisplay>
                <InfoDisplay>
                  <div>Attack Range</div>
                  <div>
                    {heroStatsJson[heroIdTagger].baseStats.attackRange !== ""
                      ? heroStatsJson[heroIdTagger].baseStats.attackRange
                      : "None"}
                  </div>
                </InfoDisplay>
              </RowCard>
            ) : null}
          </React.Fragment>
        );
        break;
      case "doubleHero":
        template = (
          <React.Fragment>
            {heroStatsJson[heroIdTagger].basicInfo.name.map((compact, i) => {
              return (
                <React.Fragment key={i}>
                  <RowCard>
                    <div className={styles.singleHero}>
                      <InfoDisplayHero>{compact}</InfoDisplayHero>
                      <InfoDisplayHero>
                        <div className={styles.heroTitle}>
                          {heroStatsJson[heroIdTagger].basicInfo.title}
                        </div>
                        <div className={styles.heroTitleImg}>
                          <img
                            alt="miniIconhero"
                            src={heroImage[heroIdTagger].logo}
                          />
                        </div>
                      </InfoDisplayHero>
                    </div>
                  </RowCard>
                  <RowCard>
                    <InfoDisplayMulti
                      headVal="Attack Type"
                      value={
                        typeof heroStatsJson[heroIdTagger].baseStats
                          .attackType === "string"
                          ? heroStatsJson[heroIdTagger].baseStats.attackType
                          : heroStatsJson[heroIdTagger].baseStats.attackType[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Health"
                      value={
                        typeof heroStatsJson[heroIdTagger].baseStats.health ===
                        "string"
                          ? heroStatsJson[heroIdTagger].baseStats.health
                          : heroStatsJson[heroIdTagger].baseStats.health[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Regen"
                      value={
                        typeof heroStatsJson[heroIdTagger].baseStats
                          .healthRegen === "string"
                          ? heroStatsJson[heroIdTagger].baseStats.healthRegen
                          : heroStatsJson[heroIdTagger].baseStats.healthRegen[i]
                      }
                    />

                    <InfoDisplayMulti
                      headVal="Resources"
                      value={
                        heroStatsJson[heroIdTagger].baseStats.resourceAmount +
                          heroStatsJson[heroIdTagger].baseStats.resourceType ===
                        "None"
                          ? ""
                          : heroStatsJson[heroIdTagger].baseStats
                              .resourceAmount +
                            " " +
                            heroStatsJson[heroIdTagger].baseStats.resourceType
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Damge"
                      value={
                        typeof heroStatsJson[heroIdTagger].baseStats
                          .attackDamage === "string"
                          ? heroStatsJson[heroIdTagger].baseStats.attackDamage
                          : heroStatsJson[heroIdTagger].baseStats.attackDamage[
                              i
                            ]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Speed"
                      value={
                        typeof heroStatsJson[heroIdTagger].baseStats
                          .attackSpeed === "string"
                          ? heroStatsJson[heroIdTagger].baseStats.attackSpeed
                          : heroStatsJson[heroIdTagger].baseStats.attackSpeed[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Range"
                      value={
                        heroStatsJson[heroIdTagger].baseStats.attackRange[i]
                      }
                    />
                  </RowCard>
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
        break;
      case "threeHero":
        template = (
          <React.Fragment>
            {heroStatsJson[heroIdTagger].basicInfo.name.map((compact, i) => {
              return (
                <React.Fragment key={i}>
                  <RowCard>
                    <div className={styles.singleHero}>
                      <InfoDisplayHero>{compact}</InfoDisplayHero>
                      <InfoDisplayHero>
                        {heroStatsJson[heroIdTagger].basicInfo.title}
                        <div className={styles.heroTitleImg}>
                          <img
                            alt="miniIconhero"
                            src={heroImage[heroIdTagger].logo}
                          />
                        </div>
                      </InfoDisplayHero>
                    </div>
                  </RowCard>
                  <RowCard>
                    <InfoDisplayMulti
                      headVal="Attack Type"
                      value={
                        typeof heroStatsJson[heroIdTagger].baseStats
                          .attackType === "string"
                          ? heroStatsJson[heroIdTagger].baseStats.attackType
                          : heroStatsJson[heroIdTagger].baseStats.attackType[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Health"
                      value={heroStatsJson[heroIdTagger].baseStats.health[i]}
                    />
                    <InfoDisplayMulti
                      headVal="Regen"
                      value={
                        heroStatsJson[heroIdTagger].baseStats.healthRegen[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Reources"
                      value={
                        heroStatsJson[heroIdTagger].baseStats.resourceAmount ===
                        "None"
                          ? "None"
                          : heroStatsJson[heroIdTagger].baseStats
                              .resourceAmount +
                              " " +
                              heroStatsJson[heroIdTagger].baseStats
                                .resourceType ===
                            "None"
                          ? "None"
                          : heroStatsJson[heroIdTagger].baseStats.resourceType
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Damge"
                      value={
                        heroStatsJson[heroIdTagger].baseStats.attackDamage[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Speed"
                      value={
                        typeof heroStatsJson[heroIdTagger].baseStats
                          .attackSpeed === "string"
                          ? heroStatsJson[heroIdTagger].baseStats.attackSpeed
                          : heroStatsJson[heroIdTagger].baseStats.attackSpeed[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Range"
                      value={
                        heroStatsJson[heroIdTagger].baseStats.attackRange[i]
                      }
                    />
                  </RowCard>
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
        break;
      default:
        template = null;
    }
    return template;
  }

  return (
    <Card>
      {typeof heroType === "string"
        ? renderHeroType("singleHero")
        : heroType.length < 3
        ? renderHeroType("doubleHero")
        : renderHeroType("threeHero")}
    </Card>
  );
};

export default Herotype;
