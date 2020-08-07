import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../Shared/components/card";
import MainContainer from "../../Shared/components/mainContainer";
import HeroCouSyn from "../components/heroCouSyn";
import Herotype from "../components/heroType";
import Herobasicinfo from "../components/heroBasicInfo";
import HeroSkills from "../components/heroSkills";

import styles from "./heroes.module.css";

const Heroes = (props) => {
  const { heroId, heroImage } = props;
  const [displaySkill, setDisplaySkill] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayCouSyn, setDisplayCouSyn] = useState(false);

  const displaySkillsHandler = () => {
    displaySkill === true ? setDisplaySkill(false) : setDisplaySkill(true);
  };
  const displayInfoHandler = () => {
    displayInfo === true ? setDisplayInfo(false) : setDisplayInfo(true);
  };
  const displayCouSynHandler = () => {
    displayCouSyn === true ? setDisplayCouSyn(false) : setDisplayCouSyn(true);
  };

  // const skillHeroName =
  //   heroImage
  //     .split("https://www.heroesfire.com/images/wikibase/icon/heroes/")[1]
  //     .split(".png")[0]
  //     .replace("-", " ")
  //     .replace("-", " ")
  //     .charAt(0)
  //     .toUpperCase() +
  //   heroImage
  //     .split("https://www.heroesfire.com/images/wikibase/icon/heroes/")[1]
  //     .split(".png")[0]
  //     .replace("-", " ")
  //     .replace("-", " ")
  //     .slice(1);

  return (
    <MainContainer>
      <div className={styles.backHero}>
        <Link to="/heroes">Go Back To Heroes</Link>
      </div>
      <Card>
        <div className={styles.heroSections}>1. Main info</div>
      </Card>
      <Herotype heroImage={heroImage} heroIdTagger={heroId} />
      <Card>
        <div
          onClick={() => displaySkillsHandler()}
          className={styles.heroSections}
        >
          2. Skills
        </div>
      </Card>
      <Card>
        {displaySkill === true ? (
          <HeroSkills heroImage={heroImage} />
        ) : (
          "Click on Skills to expand"
        )}
      </Card>
      <Card>
        <div
          onClick={() => displayInfoHandler()}
          className={styles.heroSections}
        >
          3. Basic info
        </div>
      </Card>
      <Card>
        {displayInfo === true ? (
          <Herobasicinfo heroIdTagger={heroId} />
        ) : (
          "Click on Basic Info to expand"
        )}
      </Card>
      <Card>
        <div
          onClick={() => displayCouSynHandler()}
          className={styles.heroSections}
        >
          4. Synergies and Counters
        </div>
      </Card>
      <Card>
        {displayCouSyn === true ? (
          <HeroCouSyn heroIdTagger={heroId} />
        ) : (
          "Click on Synergies and Counters to expand"
        )}
      </Card>
    </MainContainer>
  );
};

export default Heroes;
