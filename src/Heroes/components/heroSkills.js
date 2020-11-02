import React from "react";

import InfoDisplayHero from "../../Shared/components/infoDisplay";
import InfoDisplaySkill from "../../Shared/components/infoDisplaySkill";
import skillsData from "../data/heroSkills.json";

import styles from "../../Shared/components/infoDisplaySkill.module.css";

const HeroSkills = ({ heroImage }) => {
  const skillHeroName = heroImage
    .split("https://www.heroesfire.com/images/wikibase/icon/heroes/")[1]
    .split(".png")[0]
    .replace("-", " ")
    .replace("-", " ")
    .toUpperCase();

  const nameFixer =
    skillHeroName === "ETC"
      ? "E-T-C"
      : skillHeroName && skillHeroName === "LUCIO"
      ? "LÚCIO"
      : skillHeroName && skillHeroName === "THE BUTCHER"
      ? "the-butcher"
      : skillHeroName && skillHeroName === "LT MORALES"
      ? "LT. MORALES"
      : skillHeroName && skillHeroName === "LI MING"
      ? "LI-MING"
      : skillHeroName && skillHeroName === "SGT HAMMER"
      ? "sgt-hammer"
      : skillHeroName && skillHeroName === "THE LOST VIKINGS"
      ? "the-lost-vikings"
      : skillHeroName;

  console.log(nameFixer, skillHeroName);

  const skillsMap = skillsData.map(
    ({ heroName, heroSkills, heroHeroicSkills }) =>
      heroName === nameFixer.toLowerCase() && (
        <React.Fragment key={heroName}>
          <div className={styles.divSkill}>
            <InfoDisplayHero>Primary</InfoDisplayHero>
            {heroSkills.map(({ skillKey, skillName, skillImg }) =>
              skillKey === "Q" || skillKey === "W" || skillKey === "E" ? (
                <div key={skillName} className={styles.divSkillContainer}>
                  <InfoDisplaySkill
                    headVal={`[` + skillKey + `] ` + skillName}
                    value={skillName}
                    img={skillImg}
                  />
                </div>
              ) : null
            )}
          </div>
          <div className={styles.divSkill}>
            <InfoDisplayHero>Heroic</InfoDisplayHero>
            {heroHeroicSkills.map(({ skillKey, skillName, skillImg }) =>
              skillKey === "R" ? (
                <div key={skillName} className={styles.divSkillContainer}>
                  <InfoDisplaySkill
                    headVal={`[` + skillKey + `] ` + skillName}
                    value={skillName}
                    img={skillImg}
                  />
                </div>
              ) : null
            )}
          </div>
          <div className={styles.divSkill}>
            <InfoDisplayHero>Trait</InfoDisplayHero>
            {heroSkills.map(({ skillKey, skillName, skillImg }) =>
              skillKey === "D" ? (
                <div key={skillName} className={styles.divSkillContainer}>
                  <InfoDisplaySkill
                    headVal={`[` + skillKey + `] ` + skillName}
                    value={skillName}
                    img={skillImg}
                  />
                </div>
              ) : null
            )}
          </div>
          <div className={styles.divSkill}>
            <InfoDisplayHero>Others</InfoDisplayHero>
            {heroSkills.map(({ skillKey, skillName, skillImg }) =>
              skillKey !== "D" &&
              skillKey !== "W" &&
              skillKey !== "Q" &&
              skillKey !== "R" &&
              skillKey !== "E" ? (
                <div key={skillName} className={styles.divSkillContainer}>
                  <InfoDisplaySkill
                    headVal={`[` + skillKey + `] ` + skillName}
                    value={skillName}
                    img={skillImg}
                  />
                </div>
              ) : null
            )}
          </div>
        </React.Fragment>
      )
  );

  return <div className={styles.displaySkills}>{skillsMap}</div>;
};

export default HeroSkills;
