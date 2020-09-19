import React from "react";

import traitsData from "../data/heroTraits.json";
import heroTalent from "../data/heroTalents2.json";
import styles from "./heroTraits.module.css";

const HeroTrait = ({ heroIdTagger }) => {
  const heroTalentsInfo = [
    ...heroTalent[heroIdTagger].traits.map((trait) => trait.traitDesc),
  ];

  const heroTraitInfo = traitsData[heroIdTagger];
  // console.log(heroTalentsInfo);
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
                        <div>
                          <div className={styles.titleDesc}>{traitAlt}</div>
                          <div className={styles.altDesc}>
                            {heroTalentsInfo[i].map((item) =>
                              item.traitName.split(" ")[0] ===
                              traitAlt.split(" ")[0] ? (
                                <div key={Math.random()}>
                                  <>
                                    {item.traitDesc.split("\n")[0].split(":")
                                      .length > 1 ? (
                                      <div
                                        key={Math.random()}
                                        className={styles.specialAlt}
                                      >
                                        <div className={styles.specialAlt1}>
                                          {item.traitDesc
                                            .split("\n")[0]
                                            .split(":")[0] + ":"}
                                        </div>
                                        <div className={styles.specialAlt11}>
                                          {
                                            item.traitDesc
                                              .split("\n")[0]
                                              .split(":")[1]
                                          }
                                        </div>
                                      </div>
                                    ) : (
                                      item.traitDesc.split("\n")[0]
                                    )}
                                  </>
                                  {item.traitDesc
                                    .split("\n")
                                    .slice(1)
                                    .map((items) => (
                                      <div
                                        key={items}
                                        className={styles.specialAlt}
                                      >
                                        {items.split(":").length > 1 ? (
                                          <>
                                            <div className={styles.specialAlt1}>
                                              {items.split(":")[0] + ":"}
                                            </div>
                                            <div>{items.split(":")[1]}</div>
                                          </>
                                        ) : (
                                          <div className={styles.specialAlt2}>
                                            [{items}]
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                </div>
                              ) : null
                            )}
                          </div>
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
    </>
  );
};

export default HeroTrait;
