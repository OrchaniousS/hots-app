import React from "react";

import styles from "./heroTraits.module.css";
import traitsData from "../data/heroTraits.json";

const HeroTrait = ({ heroIdTagger }) => {
  return (
    <>
      {traitsData.map((info, i) =>
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
      )}
    </>
  );
};

export default HeroTrait;
