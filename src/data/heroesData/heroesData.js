import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "../../app.module.css";
import * as data from "../jsonData/heroData.json";

class HeroesData extends Component {
  state = {
    heroInfoJson: JSON.parse(JSON.stringify(data)).default,
    heroId: [],
  };

  componentDidMount() {
    let heroSidePG = () => {
      for (let infoById of this.state.heroInfoJson) {
        console.log(infoById);
      }
    };
    this.setState({
      heroId: heroSidePG,
    });
    console.log(heroSidePG());
    // console.log(this.state.heroInfoJson);
  }

  heroGenerator = () => {
    let heroGene = this.state.heroInfoJson.map((compact) => {
      return (
        <div>
          <div
            onClick={() => this.onClickHeroPanel()}
            key={compact.id}
            className={styles.heroGrid}
            heroUniqer={this.state.heroId}
          >
            {/* <Link
            className={styles.heroLink}
            to={`heroes/${compact.name.toLowerCase()}`}
          > */}
            <div className={styles.heroPersonal}>
              <div className={styles.heroPersonalImg}>
                <div>{compact.name}</div>
                <img alt="heroIcon" src={compact.logo}></img>
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
      );
    });
    return heroGene;
  };

  onClickHeroPanel = () => {
    document.querySelector("div.app_heroPanelContainer__3Ai7v").style.display =
      "block";
  };

  heroSidePanelGenerator = () => {
    let heroPanelGene = this.state.heroInfoJson.map((compact) => {
      // console.log(
      //   compact.id == "0"
      //     ? compact.id + " " + compact.name
      //     : "hero doesnt exist"
      // );
      return (
        <div className={styles.heroPanelMoveable}>
          <div>
            <div className={styles.heroPanelImage}>
              <img
                className={styles.heroPanelImageImg}
                alt="dw"
                src="https://static.heroesofthestorm.com/images/hero-select/card-portraits/deathwing-b007b23426.jpg"
              />
            </div>
            <div className={styles.heroPanelFixed}>
              <div className={styles.heroPanelInfo}>
                <div className={styles.heroPanelMainInfo}>
                  <h1>{compact.name}</h1>
                  <div>
                    <div>Role: {compact.role}</div>
                    <div>Difficulty: A</div>
                    <div>Franchise: A</div>
                  </div>
                </div>
                <Link className={styles.heroLink} to={`heroes/deathwing`}>
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return heroPanelGene;
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
              {this.heroGenerator()}
            </div>
            <div className={styles.heroPanelContainer}>
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
