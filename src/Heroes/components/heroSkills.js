import React from "react";

import InfoDisplayHero from "../../Shared/components/infoDisplay";
import InfoDisplaySkill from "../../Shared/components/infoDisplaySkill";
import skillsData from "../data/heroSkills.json";

import styles from "../../Shared/components/infoDisplaySkill.module.css";

const HeroSkills = ({ heroImage }) => {
  // const testSkills = console.log(skillsData);

  const skillHeroName = heroImage
    .split("https://www.heroesfire.com/images/wikibase/icon/heroes/")[1]
    .split(".png")[0]
    .replace("-", " ")
    .replace("-", " ")
    .toUpperCase();

  const nameFixer =
    skillHeroName === "ETC"
      ? "E.T.C."
      : skillHeroName && skillHeroName === "LUCIO"
      ? "LÚCIO"
      : skillHeroName && skillHeroName === "LT MORALES"
      ? "LT. MORALES"
      : skillHeroName && skillHeroName === "ZULJIN"
      ? "ZUL'JIN"
      : skillHeroName && skillHeroName === "LI MING"
      ? "LI-MING"
      : skillHeroName && skillHeroName === "ANUBARAK"
      ? "ANUB'ARAK"
      : (skillHeroName && skillHeroName === "CHO") || skillHeroName === "GALL"
      ? "CHO'GALL"
      : skillHeroName && skillHeroName === "DVA"
      ? "D.VA"
      : skillHeroName && skillHeroName === "KAELTHAS"
      ? "KAEL'THAS"
      : skillHeroName;

  console.log(skillHeroName);

  const skillsMap = skillsData.map((skill) => {
    return (
      skill.heroName === nameFixer && (
        <React.Fragment key={skill.heroName}>
          <div className={styles.divSkill}>
            <InfoDisplayHero>Primary</InfoDisplayHero>
            <div className={styles.divSkillContainer}>
              <InfoDisplaySkill
                headVal={"[Q] " + skill.primary.skills.skillA.skillName}
                value={skill.primary.skills.skillA.skillInfo}
                img={skill.primary.skills.skillA.skillImage}
              />
              <InfoDisplaySkill
                headVal={"[W] " + skill.primary.skills.skillB.skillName}
                value={skill.primary.skills.skillB.skillInfo}
                img={skill.primary.skills.skillB.skillImage}
              />
              <InfoDisplaySkill
                headVal={"[E] " + skill.primary.skills.skillC.skillName}
                value={skill.primary.skills.skillC.skillInfo}
                img={skill.primary.skills.skillC.skillImage}
              />
            </div>
          </div>
          <div className={styles.divSkill}>
            <InfoDisplayHero>Heroic</InfoDisplayHero>
            <div className={styles.divSkillContainer}>
              <InfoDisplaySkill
                headVal={"[R] " + skill.heroic.skills.skillA.skillName}
                value={skill.heroic.skills.skillA.skillInfo}
                img={skill.heroic.skills.skillA.skillImage}
              />
              <InfoDisplaySkill
                headVal={"[R] " + skill.heroic.skills.skillB.skillName}
                value={skill.heroic.skills.skillB.skillInfo}
                img={skill.heroic.skills.skillB.skillImage}
              />
            </div>
          </div>
          <div className={styles.divSkill}>
            <InfoDisplayHero>Trait</InfoDisplayHero>
            <div className={styles.divSkillContainer}>
              <InfoDisplaySkill
                headVal={"[D] " + skill.trait.skillName}
                value={skill.trait.skillInfo}
                img={skill.trait.skillImage}
              />
            </div>
          </div>
        </React.Fragment>
      )
    );
  });

  return <div className={styles.displaySkills}>{skillsMap}</div>;
};

export default HeroSkills;
