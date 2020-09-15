import React from "react";

import traitsData from "../data/heroTraits.json";
import heroTalent from "../data/heroTalents2.json";
import styles from "./heroTraits.module.css";

const HeroTrait = ({ heroIdTagger }) => {
  const heroTalentsInfo = [
    ...heroTalent[heroIdTagger].traits.map((trait) => trait.traitDesc),
  ];

  const heroTraitInfo = traitsData[heroIdTagger];
  console.log(heroTalentsInfo);
  // console.log(traitsData[heroIdTagger].traits);

  return (
    <>
      {
        <div className={styles.traitContainer} key={heroIdTagger}>
          {heroTraitInfo.traits.map(({ traitLevel, traitRow }, i) => (
            <div key={heroIdTagger++} className={styles.traitRow}>
              <span className={styles.traitLevel}>{traitLevel}</span>
              <div className={styles.traits}>
                {traitRow.traitNames.map(({ traitAlt, traitImg }) => (
                  <div key={heroIdTagger++} className={styles.trait}>
                    <div className={styles.traitHolder} key={traitAlt}>
                      <img
                        className={styles.traitImg}
                        src={traitImg}
                        alt={traitImg}
                      />
                      <span className={styles.traitAlt}>
                        <img src={traitImg} alt={traitImg} />
                        <div className={styles.titleDesc}>{traitAlt}</div>
                        <div className={styles.altDesc}>
                          {heroTalentsInfo[i].map((item) =>
                            item.traitName === traitAlt ? (
                              <>
                                <div>
                                  {item.traitDesc.replace("\n", `${(<br />)}`)}
                                </div>
                              </>
                            ) : null
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      }

      {/* {traitsData.map((info, i) =>
        i === heroIdTagger ? (
          <div className={styles.traitContainer} key={i}>
            {info.traits.map(({ traitLevel, traitRow }) => (
              <div key={traitLevel} className={styles.traitRow}>
                <span>{traitLevel}</span>
                <div className={styles.traits}>
                  {traitRow.traitNames.map(({ traitAlt, traitImg }) => (
                    <div className={styles.traitHolder} key={traitAlt}>
                      <img src={traitImg} alt={traitImg} />
                      <span className={styles.traitAlt}>
                        <img src={traitImg} alt={traitImg} />
                        <div>{traitAlt}</div>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null
      )} */}
    </>
  );
};

export default HeroTrait;
