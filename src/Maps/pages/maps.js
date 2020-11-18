import React, { useState } from "react";

import MainContainer from "../../Shared/components/mainContainer";
import mapData from "../data/hotsMaps.json";
import styles from "./maps.module.css";

const Maps = () => {
  const mapJson = JSON.parse(JSON.stringify(mapData));
  const [mapHexId, setmapHexId] = useState("");
  const [bottomDisplayUnit, setbottomDisplayUnit] = useState("none");

  const mapScroll = async () => {
    await document.querySelector("#mapScroll");
    return document.querySelector("#mapScroll").scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const mapInfoGenerator = () =>
    mapHexId === "" ? null : (
      <div className={styles.mapBottomContainer}>
        <div className={styles.objTitle}>
          <h2>Map Objectives</h2>
        </div>
        <div className={styles.mapObj}>
          <div className={styles.mapObjMain}>
            <div className={styles.mapObjMainInfo}>
              <h5>{mapJson[mapHexId].mapObj.objectiveA.objName}</h5>
              <p>{mapJson[mapHexId].mapObj.objectiveA.objDescription}</p>
            </div>
            <div className={styles.mapObjMainImg}>
              <img
                alt={mapJson[mapHexId].mapObj.objectiveA.objName}
                src={mapJson[mapHexId].mapObj.objectiveA.objImg}
              />
            </div>
          </div>
          <div className={styles.mapObjMain}>
            <div className={styles.mapObjMainInfo}>
              <h5>{mapJson[mapHexId].mapObj.objectiveB.objName}</h5>
              <p>{mapJson[mapHexId].mapObj.objectiveB.objDescription}</p>
            </div>
            <div className={styles.mapObjMainImg}>
              <img
                alt={mapJson[mapHexId].mapObj.objectiveB.objName}
                src={mapJson[mapHexId].mapObj.objectiveB.objImg}
              />
            </div>
          </div>
          <div className={styles.mapObjMain}>
            <div className={styles.mapObjMainInfo}>
              <h5>{mapJson[mapHexId].mapObj.objectiveC.objName}</h5>
              <p>{mapJson[mapHexId].mapObj.objectiveC.objDescription}</p>
            </div>
            <div className={styles.mapObjMainImg}>
              <img
                alt={mapJson[mapHexId].mapObj.objectiveC.objName}
                src={mapJson[mapHexId].mapObj.objectiveC.objImg}
              />
            </div>
          </div>
        </div>
        <div className={styles.mapInfo}>
          <h1>{mapJson[mapHexId].mName}</h1>
          <div className={styles.mapWider}>
            <a rel="prefetch" href={mapJson[mapHexId].mapWider}>
              <img
                alt={`mini ${mapJson[mapHexId].mName}`}
                src={mapJson[mapHexId].mapWider}
              />
            </a>
          </div>
        </div>
      </div>
    );

  return (
    <MainContainer>
      <div className={styles.mapContainer}>
        <h2>Maps quick info</h2>
        <div className={styles.mapHexCollage}>
          {mapJson.map((compact, id) =>
            mapHexId === undefined ? null : (
              <div
                key={id}
                onClick={() => {
                  setmapHexId(id);
                  setbottomDisplayUnit("block");
                  mapScroll();
                }}
                className={styles.fixedI}
              >
                <div
                  className={
                    id !== mapHexId && mapHexId !== ""
                      ? styles.mapHexUnitUnActive
                      : null
                  }
                >
                  <div className={styles.mapHexIcon}>
                    <img
                      alt={compact.mName}
                      src={`../../images/maps/${compact.mName}.jpg`}
                    />
                  </div>
                  <div className={styles.mapHexaBG}>
                    <span className={styles.mapHexaBGName}>
                      {compact.mName}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div
          id="mapScroll"
          className={styles.bottomMapInfo}
          style={{ display: bottomDisplayUnit }}
        >
          {mapInfoGenerator()}
        </div>
      </div>
    </MainContainer>
  );
};

export default Maps;
