import React from "react";

import RowCard from "../../Shared/components/rowCard";
import InfoDisplaySkill from "../../Shared/components/infoDisplaySkill";
import skillsData from "../data/heroSkills.json";

const HeroSkills = (props) => {
  //   const testSkills = console.log(skillsData);
  const skillHeroName = props.heroImage
    .split("https://www.heroesfire.com/images/wikibase/icon/heroes/")[1]
    .split(".png")[0]
    .replace("-", " ")
    .replace("-", " ")
    .toUpperCase();
  //   console.log(skillHeroName);
  const skillsMap = skillsData.map((skill) => {
    return (
      skill.heroName === skillHeroName && (
        <React.Fragment key={skill.heroName}>
          {/* {skill.heroName === skillHeroName && (
            <React.Fragment key={skill.heroName}>
              <RowCard>
                <InfoDisplaySkill headVal={`${skillHeroName} skills`} />
              </RowCard>
            </React.Fragment>
          )} */}
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
        </React.Fragment>
      )
    );
  });
  return <div>{skillsMap}</div>;
};

export default HeroSkills;
