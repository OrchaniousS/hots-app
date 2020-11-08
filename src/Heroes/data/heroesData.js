import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainContainer from "../../Shared/components/mainContainer";
import data from "./heroData.json";
import dataPanel from "./heroPanel.json";
import styles from "../pages/heroesData.module.css";

const HeroesData = () => {
  const [indexNum, setIndexNum] = useState("");
  const [indexName, setIndexName] = useState("");
  const [buttonRole, setButtonRole] = useState(null);
  const [rolesHandler, setrolesHandler] = useState(false);

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

  function heroSidePanelGenerator() {
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
  }

  const roleHandler = (roleValue) => {
    if (roleValue) {
      roleValue !== buttonRole
        ? setButtonRole(roleValue) &&
          document.querySelector("#filter").classList.add("filterView")
        : setButtonRole(null) &&
          document.querySelector("#filter").classList.add("filterView");
    } else {
      setButtonRole(null);
    }
  };

  const roles = [
    {
      rolesType: "Melee Assassin",
      rolesImg:
        "https://images.blz-contentstack.com/v3/assets/blta565ae3223b62a29/blt010673a4b68ebcef/5e4dcaae8dc1e51c53168994/role-melee-assassin.png",
    },
    {
      rolesType: "Ranged Assassin",
      rolesImg:
        "https://images.blz-contentstack.com/v3/assets/blta565ae3223b62a29/blt7867ddf77e5aff1d/5e4dcaae297b4d1b5ff022e0/role-ranged-assassin.png",
    },
    {
      rolesType: "Support",
      rolesImg:
        "https://images.blz-contentstack.com/v3/assets/blta565ae3223b62a29/blte9b7ef0a6f04d43b/5e4dcaaea9f0fb732c24c3cd/role-support.png",
    },
    {
      rolesType: "Healer",
      rolesImg:
        "https://images.blz-contentstack.com/v3/assets/blta565ae3223b62a29/blt55cabba57e8ee385/5e4dcaae8286c81bdae785b0/role-healer.png",
    },
    {
      rolesType: "Tank",
      rolesImg:
        "https://images.blz-contentstack.com/v3/assets/blta565ae3223b62a29/bltfd59adfb9b1fec0e/5e4dcaae8d83401be1195e7a/role-tank.png",
    },
    {
      rolesType: "Bruiser",
      rolesImg:
        "https://images.blz-contentstack.com/v3/assets/blta565ae3223b62a29/bltfb68c2acf0fe59ee/5e4dcaae0cabeb72b7783d67/role-bruiser.png",
    },
  ];

  const roleStyleHandler = (roleV) =>
    buttonRole === roleV
      ? `${styles.heroGrid}`
      : `${styles.heroGrid + "" + styles.filterView}` && buttonRole === null
      ? `${styles.heroGrid}`
      : null;

  const rolesDisplayHandler = () =>
    setrolesHandler((rolesHandler) => !rolesHandler);

  return (
    <MainContainer type="heroContainer">
      <div className={styles.heroC}>
        <h2>Heroes</h2>
        <div>
          <h2>{buttonRole === null ? null : buttonRole}</h2>
        </div>
        <div className={styles.filterWrapper}>
          <div className={styles.roleFilter}>
            <p
              onClick={() => rolesDisplayHandler()}
              className={styles.filterTitle}
            >
              Filter <br /> Roles
            </p>
            {rolesHandler && (
              <>
                <p
                  onClick={() => setButtonRole(null)}
                  className={styles.filterTitle}
                >
                  All
                </p>
                {roles.map(({ rolesType, rolesImg }) => (
                  <div
                    id="roles"
                    key={rolesType}
                    onClick={() => {
                      roleHandler(rolesType);
                    }}
                    className={
                      rolesType === buttonRole
                        ? `${styles.activeRole}`
                        : `${styles.unActiveRole}`
                    }
                  >
                    <img alt={rolesImg} src={rolesImg} />
                    <div>{rolesType}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroGridRowColumon}>
            {heroInfoJson.map(({ id, logo, name, role }) => {
              return (
                <React.Fragment key={id}>
                  <div
                    id="filter"
                    className={roleStyleHandler(role)}
                    onClick={() => {
                      setIndexNum(id);
                      setIndexName(name);
                      return window.innerWidth < 960
                        ? (window.location.href = `/heroes/${name}`)
                        : null;
                    }}
                  >
                    <div className={styles.heroPersonal}>
                      {buttonRole === role ? (
                        <div id={role} className={styles.heroPersonalImg}>
                          <div>{name}</div>
                          <img alt="heroIcon" src={logo}></img>
                        </div>
                      ) : null}
                      {buttonRole === null ? (
                        <div id={role} className={styles.heroPersonalImg}>
                          <div>{name}</div>
                          <img alt="heroIcon" src={logo}></img>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div id="heroPanelC" className={styles.heroPanelContainer}>
            <div className={styles.heroPanelMoveable}>
              {heroSidePanelGenerator()}
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default HeroesData;
