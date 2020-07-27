import React, { Component } from "react";

import styles from "../../app.module.css";
import * as data from "../../data/jsonData/heroStats.json";
import InfoDisplay from "../infoDisplay";

class Herobasic extends Component {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
  };

  render() {
    return (
      <div className={styles.basicInfo} key={this.props.heroIdTagger}>
        <InfoDisplay>Role</InfoDisplay>
        <InfoDisplay>
          {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo.role}
        </InfoDisplay>
        <InfoDisplay>Difficulty</InfoDisplay>
        <InfoDisplay>
          {
            this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
              .difficulty
          }
        </InfoDisplay>
        <InfoDisplay>Price</InfoDisplay>
        <InfoDisplay>
          {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo.price +
            " Gold"}
        </InfoDisplay>
        <InfoDisplay>Lore</InfoDisplay>
        <InfoDisplay>
          {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo.qoute}
        </InfoDisplay>
      </div>
    );
  }
}

export default Herobasic;
