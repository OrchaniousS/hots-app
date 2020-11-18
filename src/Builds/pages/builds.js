import React, { useState } from "react";
import { Link } from "react-router-dom";

import data from "../../Heroes/data/heroBuilds.json";
import heroData from "../../Heroes/data/heroData.json";
import MainContainer from "../../Shared/components/mainContainer";
import styles from "./builds.module.css";

const Builds = () => {
  const [indexNum, setIndexNum] = useState("");

  const heroD = [...JSON.parse(JSON.stringify(heroData))];

  const heroBuilds = [...data];

  const heroBuildNameStyleHandler = (input) => {
    return input === "Recommended "
      ? styles.typeReco
      : input === "Situational "
      ? styles.typeSitu
      : styles.typeNotReco;
  };

  return (
    <MainContainer type="heroContainer">
      <div className={styles.heroC}>
        <div className={styles.buildsContainer}>
          <h2>Builds</h2>
          <div className={styles.heroFixedBuilds}>
            <div className={styles.heroContainer}>
              <div className={styles.heroGridRowColumon}>
                {data.map(({ heroName }, i) => (
                  <div
                    key={i}
                    className={styles.heroGrid}
                    onClick={() => {
                      setIndexNum(i);
                    }}
                  >
                    <div className={styles.heroPersonal}>
                      <img
                        alt="heroIcon"
                        src={`https://www.heroesfire.com/images/wikibase/icon/heroes/${
                          heroName === `kel-thuzad` ? `kelthuzad` : heroName
                        }.png`}
                      ></img>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.fixBuildContainer}>
              {indexNum === "" ? null : (
                <>
                  <div className={styles.heroName}>
                    {heroBuilds[indexNum].heroName[0].toUpperCase() +
                      heroBuilds[indexNum].heroName
                        .slice(1)
                        .replaceAll("-", " ")}{" "}
                    Build{" "}
                    <Link to={`/heroes/${heroD[indexNum].name}`}>More</Link>
                  </div>
                  <div className={styles.buildContainer}>
                    {heroBuilds[indexNum].heroBuilds.map((build, i) => (
                      <div key={i} className={styles.singleBuildContainer}>
                        <div className={styles.heroBuildNameHolder}>
                          <div className={styles.heroBuildName}>
                            {build.buildName}
                          </div>
                          <div
                            className={heroBuildNameStyleHandler(
                              build.buildType
                            )}
                          >
                            {build.buildType}
                            <span className={styles.emojiType}>
                              {build.buildType === "Recommended "
                                ? "👍"
                                : build.buildType === "Situational "
                                ? "👁‍🗨"
                                : "👎"}
                            </span>
                          </div>
                        </div>
                        <div className={styles.heroBuildTalentContainer}>
                          {build.buildTalents.map(
                            (
                              {
                                selectedTalent,
                                selectedTalentImg,
                                situationalTalent,
                                situationalTalentImg,
                                talentLvl,
                                visualTalent,
                              },
                              i
                            ) => (
                              <React.Fragment key={i}>
                                <div
                                  key={i}
                                  className={
                                    styles.heroBuildTalentContainerGrid
                                  }
                                >
                                  <div>{talentLvl}</div>
                                  <div className={styles.visuals}>
                                    {visualTalent.map(({ visuals }, i) =>
                                      visuals === "no" ? (
                                        <div
                                          key={i}
                                          className={styles.visualNo}
                                        ></div>
                                      ) : visuals === "yes" ? (
                                        <div
                                          key={i}
                                          className={styles.visualYes}
                                        ></div>
                                      ) : (
                                        <div
                                          key={i}
                                          className={styles.visualSituational}
                                        ></div>
                                      )
                                    )}
                                  </div>
                                  <div className={styles.heroBuildTalent}>
                                    {selectedTalent && (
                                      <div className={styles.selectedTalent}>
                                        <img
                                          src={selectedTalentImg}
                                          alt={selectedTalent}
                                        />
                                      </div>
                                    )}
                                  </div>
                                  {situationalTalent && (
                                    <div className={styles.situationalTalent}>
                                      {situationalTalent.map((item, i) => (
                                        <img
                                          key={i}
                                          src={situationalTalentImg[i]}
                                          alt={item}
                                        />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </React.Fragment>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Builds;
