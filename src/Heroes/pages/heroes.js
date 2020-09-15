import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../Shared/components/card";
import MainContainer from "../../Shared/components/mainContainer";
import HeroCouSyn from "../components/heroCouSyn";
import HeroType from "../components/heroType";
import HeroSkills from "../components/heroSkills";
import HeroTrait from "../components/heroTraits";

import styles from "./heroes.module.css";

const Heroes = ({ heroId, heroImage }) => {
  const [displaySkill, setDisplaySkill] = useState(false);
  const [displayCouSyn, setDisplayCouSyn] = useState(false);

  const displaySkillsHandler = () => {
    displaySkill === true ? setDisplaySkill(false) : setDisplaySkill(true);
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
        <HeroType heroImage={heroImage} heroIdTagger={heroId} />
        <HeroTrait heroIdTagger={heroId} />
      </Card>
      <div id={styles.clickableDiv} onClick={() => displaySkillsHandler()}>
        <Card type="holder">
          <div className={styles.heroSections}>Skills</div>
        </Card>
      </div>
      {displaySkill && (
        <Card>
          <HeroSkills heroImage={heroImage} />
        </Card>
      )}
      <div id={styles.clickableDiv} onClick={() => displayCouSynHandler()}>
        <Card type="holder">
          <div className={styles.heroSections}>Synergies and Counters</div>
        </Card>
      </div>
      {displayCouSyn && (
        <Card type="counter">
          <HeroCouSyn heroIdTagger={heroId} />
        </Card>
      )}
    </MainContainer>
  );
};

export default Heroes;
