import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainContainer from "../../Shared/components/mainContainer";
import data from "./heroData.json";
import dataPanel from "./heroPanel.json";

import styles from "../../app.module.css";

const HeroesData = () => {
  const [indexNum, setIndexNum] = useState("");
  const [indexName, setIndexName] = useState("");
  const [roleId, setRoleId] = useState("");

  const heroInfoJson = JSON.parse(JSON.stringify(data));
  const panelInfo = JSON.parse(JSON.stringify(dataPanel));

  const windowScroll = () => {
    window.onscroll = () => {
      return document.querySelector("#heroPanelFixed") === ""
        ? null
        : document.querySelector("#heroPanelFixed") === null
        ? null
        : (document.querySelector("#heroPanelFixed").style.position = "fixed");
    };
  };

  const heroSidePanelGenerator = () => {
    return indexNum === "" ? null : (
      <div className={styles.heroPanelMoveable}>
        <div
          id="heroPanelFixed"
          render={windowScroll()}
          className={styles.heroPanelFixed}
        >
          <div className={styles.heroPanelCard}>
            <div className={styles.heroPanelInfo}>
              <div className={styles.heroPanelImage}>
                {panelInfo.map((compact) =>
                  indexName === compact.name ? (
                    <img
                      key={compact.name}
                      alt={compact.name}
                      src={compact.img}
                    />
                  ) : null
                )}
              </div>
              <div className={styles.heroPanelBottom}>
                <div className={styles.heroPanelMainInfo}>
                  <div className={styles.heroTable}>
                    <h1>{heroInfoJson[indexNum].name}</h1>
                    {typeof heroInfoJson[indexNum] === "undefined" ? null : (
                      <table>
                        <tbody>
                          <tr>
                            <th>Role</th>
                            <td>{heroInfoJson[indexNum].role}</td>
                          </tr>
                          <tr>
                            <th>Difficulty</th>
                            <td>{heroInfoJson[indexNum].difficulty}</td>
                          </tr>
                          <tr>
                            <th>Franchise</th>
                            <td>{heroInfoJson[indexNum].franchise}</td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
                <div className={styles.heroLink}>
                  <Link to={`heroes/${heroInfoJson[indexNum].name}`}>More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <MainContainer>
      <h2>Heroes</h2>
      <div>filterContainer</div>
      <div className={styles.heroContainer}>
        <div className={styles.heroGridRowColumon}>
          {heroInfoJson.map(({ id, logo, name, role }) => {
            return (
              <div key={id}>
                {console.log(roleId)}
                <div
                  className={styles.heroGrid}
                  onClick={() => {
                    setRoleId(role);
                    setIndexNum(id);
                    setIndexName(name);
                    return window.innerWidth < 960
                      ? (window.location.href = `/heroes/${name}`)
                      : null;
                  }}
                >
                  <div className={styles.heroPersonal}>
                    <div className={styles.heroPersonalImg}>
                      <div>{name}</div>
                      <img alt="heroIcon" src={logo}></img>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="heroPanelC" className={styles.heroPanelContainer}>
          <div className={styles.heroPanelMoveable}>
            {heroSidePanelGenerator()}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default HeroesData;
