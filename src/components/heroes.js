import React, { PureComponent } from "react";

import styles from "../app.module.css";
import * as data from "../data/jsonData/heroStats.json";
import HeroCouSyn from "./hoc/heroCouSyn";
import Herotype from "./hoc/heroType";
import Herobasicinfo from "./hoc/heroBasicInfo";

class Heroes extends PureComponent {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
    heroIdInfo: this.props.heroId,
    heroImageInfo: this.props.heroImage,
  };

  render() {
    return (
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.heroMainInfo}>
            <Herotype
              heroImage={this.state.heroImageInfo}
              heroIdTagger={this.state.heroIdInfo}
            />
            <Herobasicinfo heroIdTagger={this.state.heroIdInfo}></Herobasicinfo>
          </div>
          <div className={styles.heroMainInfo}>
            <HeroCouSyn heroIdTagger={this.state.heroIdInfo} />
          </div>
        </div>
      </div>
    );
  }
}
export default Heroes;
