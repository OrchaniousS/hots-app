import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../Shared/components/card";
import MainContainer from "../../Shared/components/mainContainer";
import HeroCouSyn from "../components/heroCouSyn";
import HeroType from "../components/heroType";
import HeroTrait from "../components/heroTraits";

import styles from "./heroes.module.css";

const Heroes = ({ heroId, heroImage }) => {
  const [displayCouSyn, setDisplayCouSyn] = useState();
  const [displayTalent, setDisplayTalent] = useState();

  return (
    <MainContainer>
      <div className={styles.backHero}>
        <Link to="/heroes">Go Back To Heroes</Link>
      </div>
      <Card>
        <HeroType heroImage={heroImage} heroIdTagger={heroId} />
      </Card>
      <div
        id={styles.clickableDiv}
        onClick={() => setDisplayTalent((displayTalent) => !displayTalent)}
      >
        <Card type="holder">
          <div className={styles.heroSections}>Talents</div>
        </Card>
      </div>
      {displayTalent && (
        <Card>
          <HeroTrait heroIdTagger={heroId} />
        </Card>
      )}

      <div
        id={styles.clickableDiv}
        onClick={() => setDisplayCouSyn((displayCouSyn) => !displayCouSyn)}
      >
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

// name checker
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
