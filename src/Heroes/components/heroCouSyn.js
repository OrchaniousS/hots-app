import React, { useState } from "react";
import { Link } from "react-router-dom";

import RowCard from "../../Shared/components/rowCard";
import InfoDisplayCouSyn from "../../Shared/components/infoDisplayCouSyn";

// import { MapSelector } from "../../Maps/pages/maps";
import mcsData from "../data/hotsCouSyn.json";
import styles from "./heroCouSyn.module.css";

import { Clickedmap } from "../../Maps/components/Clickedmap";

const HeroCouSyn = (props) => {
  const { heroIdTagger } = props;
  const [clickedMap, setClickedMap] = useState("");
  const heroCounterSynergy = JSON.parse(JSON.stringify(mcsData));

  const clickedMapHandler = (mapId) => {
    setClickedMap(mapId);
    console.log(clickedMap);
    return <Clickedmap clickedMapId={clickedMap} />;
  };

  return (
    <>
      <RowCard type="counter">
        <InfoDisplayCouSyn
          type="synergy"
          headVal={
            heroCounterSynergy[heroIdTagger].heroName + " synergizes with"
          }
          value={heroCounterSynergy[heroIdTagger].heroSynergy.map((el, i) => {
            return (
              <div key={i} className={styles.heroCSingle}>
                <Link
                  to={
                    el.heroSynergyName === "sgt-hammer"
                      ? "sgt. hammer"
                      : el.heroSynergyName && el.heroSynergyName === "kaelthas"
                      ? "kael'thas"
                      : el.heroSynergyName && el.heroSynergyName === "lucio"
                      ? "Lúcio"
                      : el.heroSynergyName &&
                        el.heroSynergyName === "the-butcher"
                      ? "the butcher"
                      : el.heroSynergyName && el.heroSynergyName === "anubarak"
                      ? "Anub'arak"
                      : el.heroSynergyName
                  }
                >
                  <h4>
                    {el.heroSynergyName === "the-butcher"
                      ? "The Butcher"
                      : el.heroSynergyName.charAt(0).toUpperCase() +
                          el.heroSynergyName.slice(1) &&
                        el.heroSynergyName === "e.t.c."
                      ? "E.T.C."
                      : el.heroSynergyName.charAt(0).toUpperCase() +
                          el.heroSynergyName.slice(1) &&
                        el.heroSynergyName === "sgt-hammer"
                      ? "Sgt. Hammer"
                      : el.heroSynergyName.charAt(0).toUpperCase() +
                          el.heroSynergyName.slice(1) &&
                        el.heroSynergyName === "anubarak"
                      ? "Anub'arak"
                      : el.heroSynergyName.charAt(0).toUpperCase() +
                        el.heroSynergyName.slice(1)}
                  </h4>
                  <img
                    alt={el.heroSynergyName}
                    src={`https://www.heroesfire.com/images/wikibase/icon/heroes/${
                      el.heroSynergyName === "e.t.c."
                        ? "etc"
                        : el.heroSynergyName
                    }.png`}
                  />
                </Link>
              </div>
            );
          })}
        />
        <InfoDisplayCouSyn
          type="counter"
          headVal={
            heroCounterSynergy[heroIdTagger].heroName + " is countered by"
          }
          value={heroCounterSynergy[heroIdTagger].heroCounter.map((el, i) => {
            return (
              <div key={i} className={styles.heroCSingle}>
                <Link
                  to={
                    el.heroCounterName === "sgt-hammer"
                      ? "sgt. hammer"
                      : el.heroCounterName && el.heroCounterName === "anubarak"
                      ? "Anub'arak"
                      : el.heroCounterName && el.heroCounterName === "kaelthas"
                      ? "kael'thas"
                      : el.heroCounterName && el.heroCounterName === "lucio"
                      ? "lúcio"
                      : el.heroCounterName &&
                        el.heroCounterName === "the-butcher"
                      ? "the butcher"
                      : el.heroCounterName &&
                        el.heroCounterName === "sgt-hammer"
                      ? "Sgt. Hammer"
                      : el.heroCounterName.charAt(0).toUpperCase() +
                        el.heroCounterName.slice(1)
                  }
                >
                  <h4>
                    {el.heroCounterName === "the-butcher"
                      ? "The Butcher"
                      : el.heroCounterName.charAt(0).toUpperCase() +
                          el.heroCounterName.slice(1) &&
                        el.heroCounterName === "anubarak"
                      ? "Anub'arak"
                      : el.heroCounterName.charAt(0).toUpperCase() +
                        el.heroCounterName.slice(1)}
                  </h4>
                  <img
                    alt={el.heroCounterName}
                    src={`https://www.heroesfire.com/images/wikibase/icon/heroes/${
                      el.heroCounterName === "e.t.c."
                        ? "etc"
                        : el.heroCounterName
                    }.png`}
                  />
                </Link>
              </div>
            );
          })}
        />
        <InfoDisplayCouSyn
          type="stronger"
          headVal={
            heroCounterSynergy[heroIdTagger].heroName + " `s Stronger Maps"
          }
          value={heroCounterSynergy[heroIdTagger].strongMap.map((el, i) => {
            return (
              <div key={i} className={styles.heroCSingle}>
                {el.strongMapName === "None" ? (
                  <div>None</div>
                ) : (
                  <Link
                    // to={`/maps/${el.strongMapName}`}
                    onClick={() => {
                      clickedMapHandler(el.strongMapName);
                    }}
                  >
                    <h4>
                      {el.strongMapName.charAt(0).toUpperCase() +
                        el.strongMapName.slice(1)}
                    </h4>
                    <img
                      alt={el.strongMapName}
                      src={`../images/maps/${el.strongMapName}.jpg`}
                    />
                  </Link>
                )}
              </div>
            );
          })}
        />
        <InfoDisplayCouSyn
          type="average"
          headVal={
            heroCounterSynergy[heroIdTagger].heroName + " `s Average Maps"
          }
          value={heroCounterSynergy[heroIdTagger].naturalMap.map((el, i) => {
            return (
              <div key={i} className={styles.heroCSingle}>
                {el.naturalMapName === "None" ? (
                  <div>None</div>
                ) : (
                  <Link to={`/maps/${el.naturalMapName}`}>
                    <h4>
                      {el.naturalMapName.charAt(0).toUpperCase() +
                        el.naturalMapName.slice(1)}
                    </h4>

                    <img
                      alt={el.naturalMapName}
                      src={`../images/maps/${el.naturalMapName}.jpg`}
                    />
                  </Link>
                )}
              </div>
            );
          })}
        />
        <InfoDisplayCouSyn
          type="weaker"
          headVal={
            heroCounterSynergy[heroIdTagger].heroName + " `s Weaker Maps"
          }
          value={heroCounterSynergy[heroIdTagger].weakMap.map((el, i) => {
            return (
              <div key={i} className={styles.heroCSingle}>
                {el.weakMapName === "None" ? (
                  <div>None</div>
                ) : (
                  <Link to={`/maps/${el.weakMapName}`}>
                    {/* <MapSelector mapName={el.weakMapName} /> */}
                    <h4>
                      {el.weakMapName.charAt(0).toUpperCase() +
                        el.weakMapName.slice(1)}
                    </h4>
                    <img
                      alt={el.weakMapName}
                      src={`../images/maps/${el.weakMapName}.jpg`}
                    />
                  </Link>
                )}
              </div>
            );
          })}
        />
      </RowCard>
    </>
  );
};

export default HeroCouSyn;
