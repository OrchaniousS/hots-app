import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import styles from "../../app.module.css";
import * as data from "../jsonData/heroData.json";

class HeroesData extends PureComponent {
  constructor() {
    super();
    this.state = {
      heroInfoJson: JSON.parse(JSON.stringify(data)).default,
      indexNum: "",
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
                <img
                  alt="dw"
                  src="https://static.heroesofthestorm.com/images/hero-select/card-portraits/deathwing-b007b23426.jpg"
                />
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
      <div className={styles.mainContent}>
        <div className={styles.container}>
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
                        });
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
        </div>
      </div>
    );
  }
}

export default HeroesData;
