import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import MainContainer from "../../Shared/components/mainContainer";

import styles from "../../app.module.css";
import data from "./heroData.json";
import dataPanel from "./heroPanel.json";

// const HeroesData = (props) => {};

class HeroesData extends PureComponent {
  constructor() {
    super();
    this.state = {
      heroInfoJson: JSON.parse(JSON.stringify(data)),
      panelInfo: JSON.parse(JSON.stringify(dataPanel)),
      indexNum: "",
      indexName: "",
      displayPanelMode: "",
    };
  }

  windowScroll() {
    window.onscroll = () => {
      return document.querySelector("#heroPanelFixed") === ""
        ? null
        : document.querySelector("#heroPanelFixed") === null
        ? null
        : (document.querySelector("#heroPanelFixed").style.position = "fixed");
    };
  }

  heroSidePanelGenerator = () => {
    return this.state.indexNum === "" ? null : (
      <div className={styles.heroPanelMoveable}>
        <div
          id="heroPanelFixed"
          render={this.windowScroll()}
          className={styles.heroPanelFixed}
        >
          <div className={styles.heroPanelCard}>
            <div className={styles.heroPanelInfo}>
              <div className={styles.heroPanelImage}>
                {this.state.panelInfo.map((compact) =>
                  this.state.indexName === compact.name ? (
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
                    <h1>{this.state.heroInfoJson[this.state.indexNum].name}</h1>
                    {typeof this.state.heroInfoJson[this.state.indexNum] ===
                    "undefined" ? null : (
                      <table>
                        <tbody>
                          <tr>
                            <th>Role</th>
                            <td>
                              {
                                this.state.heroInfoJson[this.state.indexNum]
                                  .role
                              }
                            </td>
                          </tr>
                          <tr>
                            <th>Difficulty</th>
                            <td>
                              {
                                this.state.heroInfoJson[this.state.indexNum]
                                  .difficulty
                              }
                            </td>
                          </tr>
                          <tr>
                            <th>Franchise</th>
                            <td>
                              {
                                this.state.heroInfoJson[this.state.indexNum]
                                  .franchise
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
                <div className={styles.heroLink}>
                  <Link
                    to={`heroes/${
                      this.state.heroInfoJson[this.state.indexNum].name
                    }`}
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <MainContainer>
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroGridRowColumon}>
            {this.state.heroInfoJson.map((compact) => {
              return (
                <div key={compact.id}>
                  <div
                    className={styles.heroGrid}
                    onClick={() => {
                      this.setState({
                        indexNum: compact.id,
                        indexName: compact.name,
                      });
                      return window.innerWidth < 960
                        ? (window.location.href = `/heroes/${compact.name}`)
                        : null;
                    }}
                  >
                    {}
                    <div className={styles.heroPersonal}>
                      <div className={styles.heroPersonalImg}>
                        <div>{compact.name}</div>
                        <img alt="heroIcon" src={compact.logo}></img>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="heroPanelC" className={styles.heroPanelContainer}>
            <div className={styles.heroPanelMoveable}>
              {this.heroSidePanelGenerator()}
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default HeroesData;
