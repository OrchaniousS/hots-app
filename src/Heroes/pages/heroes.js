import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Card from "../../Shared/components/card";
import MainContainer from "../../Shared/components/mainContainer";
import HeroCouSyn from "../components/heroCouSyn";
import Herotype from "../components/heroType";
import Herobasicinfo from "../components/heroBasicInfo";
import HeroSkills from "../components/heroSkills";

import styles from "./heroes.module.css";

class Heroes extends PureComponent {
  state = {
    heroIdInfo: this.props.heroId,
    heroImageInfo: this.props.heroImage,
    skillHeroName:
      this.props.heroImage
        .split("https://www.heroesfire.com/images/wikibase/icon/heroes/")[1]
        .split(".png")[0]
        .replace("-", " ")
        .replace("-", " ")
        .charAt(0)
        .toUpperCase() +
      this.props.heroImage
        .split("https://www.heroesfire.com/images/wikibase/icon/heroes/")[1]
        .split(".png")[0]
        .replace("-", " ")
        .replace("-", " ")
        .slice(1),
  };

  render() {
    return (
      <MainContainer>
        <div className={styles.backHero}>
          <Link to="/heroes">Go Back To Heroes</Link>
        </div>
        <Card>
          <div className={styles.heroSections}>1. Main info</div>
        </Card>
        <Herotype
          heroImage={this.state.heroImageInfo}
          heroIdTagger={this.state.heroIdInfo}
        />
        <Card>
          <div className={styles.heroSections}>2. Skills</div>
        </Card>
        <Card>
          <HeroSkills heroImage={this.state.heroImageInfo} />
        </Card>
        <Card>
          <div className={styles.heroSections}>3. Basic info</div>
        </Card>
        <Card>
          <Herobasicinfo heroIdTagger={this.state.heroIdInfo} />
        </Card>
        <Card>
          <div className={styles.heroSections}>4. Synergies and Counters</div>
        </Card>
        <Card>
          <HeroCouSyn heroIdTagger={this.state.heroIdInfo} />
        </Card>
      </MainContainer>
    );
  }
}
export default Heroes;
