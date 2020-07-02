import React, { Component } from "react";

import styles from "../../app.module.css";
import * as data from "../../data/jsonData/heroStats.json";

class Herobasic extends Component {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
  };

  render() {
    return (
      <div>
        <div className={styles.basicInfo}>
          <div className={styles.heroBaseStats}>
            Role:{" "}
            {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo.role}
          </div>
          <div className={styles.heroBaseStats}>
            Difficulty:{" "}
            {
              this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
                .difficulty
            }
          </div>
          <div className={styles.heroBaseStats}>
            Price:{" "}
            {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo.price +
              " Gold"}
          </div>
          <div className={styles.heroQoute}>
            {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo.qoute}
          </div>
        </div>

        {/* <div className={styles.heroRightInfo}>
          <div>heroname</div>
          <div>heroFullPicture</div>
          <div>little franchise + role icon</div>
        </div> */}
      </div>
    );
  }
}

export default Herobasic;
