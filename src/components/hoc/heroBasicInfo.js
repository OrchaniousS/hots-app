import React, { Component } from "react";

import styles from "../../app.module.css";
import * as data from "../../data/jsonData/heroStats.json";

class Herobasic extends Component {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
  };

  render() {
    return (
      <div key={this.props.heroIdTagger}>
        <div className={styles.heroLeftInfo}>
          <div className={styles.heroBaseStats}>
            <table className={styles.heroTableSingle}>
              <tbody>
                <tr>
                  <th>Role:</th>
                  <td>
                    {
                      this.state.heroStatsJson[this.props.heroIdTagger]
                        .basicInfo.role
                    }
                  </td>
                </tr>
                <tr>
                  <th>Difficulty:</th>
                  <td>
                    {" "}
                    {
                      this.state.heroStatsJson[this.props.heroIdTagger]
                        .basicInfo.difficulty
                    }
                  </td>
                </tr>
                <tr>
                  <th> Price:</th>
                  <td>
                    {this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
                      .price + " Gold"}
                  </td>
                </tr>
                <tr>
                  <th> Lore:</th>
                  <td>
                    {
                      this.state.heroStatsJson[this.props.heroIdTagger]
                        .basicInfo.qoute
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Herobasic;
