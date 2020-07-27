import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import styles from "../app.module.css";
import * as data from "../data/jsonData/heroStats.json";
import HeroCouSyn from "../components/hoc/heroCouSyn";
import Herotype from "../components/hoc/heroType";
import Herobasicinfo from "../components/hoc/heroBasicInfo";
import Card from "../components/card";
import MainContainer from "../components/mainContainer";

class Heroes extends PureComponent {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
    heroIdInfo: this.props.heroId,
    heroImageInfo: this.props.heroImage,
  };

  render() {
    return (
      <MainContainer>
        <div className={styles.backHero}>
          <Link to="/heroes">Go Back To Heroes</Link>
        </div>

        <Herotype
          heroImage={this.state.heroImageInfo}
          heroIdTagger={this.state.heroIdInfo}
        />
        <Card>
          <Herobasicinfo heroIdTagger={this.state.heroIdInfo}></Herobasicinfo>
        </Card>
        <Card>
          <HeroCouSyn heroIdTagger={this.state.heroIdInfo} />
        </Card>
      </MainContainer>
    );
  }
}
export default Heroes;
