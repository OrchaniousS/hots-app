import React, { Component } from "react";

import styles from "../../app.module.css";
import RowCard from "../../Shared/components/rowCard";
import * as data from "../../data/jsonData/heroStats.json";
import InfoDisplay from "../../Shared/components/infoDisplay";

class Herobasic extends Component {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
  };

  render() {
    return (
      <div className={styles.basicInfo} key={this.props.heroIdTagger}>
        <RowCard>
          <InfoDisplay>
            <div>Role</div>
            <div>
              {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo.role}
            </div>
          </InfoDisplay>
          <InfoDisplay>
            <div>Difficulty</div>
            <div>
              {
                this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
                  .difficulty
              }
            </div>
          </InfoDisplay>
          <InfoDisplay>
            <div>Price</div>
            <div>
              {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
                .price + " Gold"}
            </div>
          </InfoDisplay>
        </RowCard>
        <RowCard>
          <InfoDisplay>
            <div>Lore</div>
            <div>
              {
                this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
                  .qoute
              }
            </div>
          </InfoDisplay>
        </RowCard>
      </div>
    );
  }
}

export default Herobasic;
