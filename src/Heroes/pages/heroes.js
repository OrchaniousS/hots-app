import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Card from "../../Shared/components/card";
import MainContainer from "../../Shared/components/mainContainer";
import HeroCouSyn from "../components/heroCouSyn";
import Herotype from "../components/heroType";
import Herobasicinfo from "../components/heroBasicInfo";

import styles from "./heroes.module.css";

class Heroes extends PureComponent {
  state = {
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
