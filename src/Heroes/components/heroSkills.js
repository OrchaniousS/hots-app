import React from "react";

import RowCard from "../../Shared/components/rowCard";
import InfoDisplayHero from "../../Shared/components/infoDisplay";
import InfoDisplaySkill from "../../Shared/components/infoDisplaySkill";
import skillsData from "../data/heroSkills.json";

const HeroSkills = (props) => {
  // const testSkills = console.log(skillsData);
  const skillHeroName = props.heroImage
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
      : skillHeroName;

  console.log(skillHeroName);

  const skillsMap = skillsData.map((skill) => {
    return (
      skill.heroName === nameFixer && (
        <React.Fragment key={skill.heroName}>
          <RowCard>
            <InfoDisplayHero>Primary</InfoDisplayHero>
          </RowCard>
          <RowCard>
            <InfoDisplaySkill
              headVal={skill.primary.skills.skillA.skillName}
              value={skill.primary.skills.skillA.skillInfo}
              img={skill.primary.skills.skillA.skillImage}
            />
            <InfoDisplaySkill
              headVal={skill.primary.skills.skillB.skillName}
              value={skill.primary.skills.skillB.skillInfo}
              img={skill.primary.skills.skillB.skillImage}
            />
            <InfoDisplaySkill
              headVal={skill.primary.skills.skillC.skillName}
              value={skill.primary.skills.skillC.skillInfo}
              img={skill.primary.skills.skillC.skillImage}
            />
          </RowCard>
          <RowCard>
            <InfoDisplayHero>Heroic</InfoDisplayHero>
          </RowCard>

          <RowCard>
            <InfoDisplaySkill
              headVal={skill.heroic.skills.skillA.skillName}
              value={skill.heroic.skills.skillA.skillInfo}
              img={skill.heroic.skills.skillA.skillImage}
            />
            <InfoDisplaySkill
              headVal={skill.heroic.skills.skillB.skillName}
              value={skill.heroic.skills.skillB.skillInfo}
              img={skill.heroic.skills.skillB.skillImage}
            />
          </RowCard>
          <RowCard>
            <InfoDisplayHero>Trait</InfoDisplayHero>
          </RowCard>
          <RowCard>
            <InfoDisplaySkill
              headVal={skill.trait.skillName}
              value={skill.trait.skillInfo}
              img={skill.trait.skillImage}
            />
          </RowCard>
        </React.Fragment>
      )
    );
  });

  return <div>{skillsMap}</div>;
};

export default HeroSkills;
