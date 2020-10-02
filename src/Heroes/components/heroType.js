import React from "react";

import RowCard from "../../Shared/components/rowCard";
import InfoDisplayCard from "../../Shared/components/infoDisplayCard";

import data from "../data/heroStats.json";
import imgData from "../data/heroData.json";

const Herotype = ({ heroIdTagger }) => {
  const heroStatsJson = JSON.parse(JSON.stringify(data));
  const heroImage = JSON.parse(JSON.stringify(imgData));

  const hero = heroStatsJson[heroIdTagger].basicInfo;
  const heroBaseStats = heroStatsJson[heroIdTagger].baseStats;
  const heroType = heroStatsJson[heroIdTagger].basicInfo.name;

  function renderHeroType(type) {
    let template = null;
    switch (type) {
      case "singleHero":
        template = (
          <React.Fragment>
            <RowCard>
              <InfoDisplayCard
                name={hero.name}
                title={hero.title}
                logo={heroImage[heroIdTagger].logo}
                atkType={["Attack Type", heroBaseStats.attackType]}
                health={[
                  "Health",
                  heroBaseStats.health !== "" ? heroBaseStats.health : "None",
                ]}
                regen={[
                  "Regen",
                  heroBaseStats.healthRegen !== ""
                    ? heroBaseStats.healthRegen
                    : "None",
                ]}
                resources={[
                  "Resources",
                  heroBaseStats.resourceAmount + heroBaseStats.resourceType ===
                  "None"
                    ? ""
                    : heroBaseStats.resourceAmount +
                      " " +
                      heroBaseStats.resourceType,
                ]}
                atkDmg={[
                  "Attack Damage",
                  heroBaseStats.attackDamage !== ""
                    ? heroBaseStats.attackDamage
                    : "None",
                ]}
                atkSpd={[
                  "Attack Speed",
                  heroBaseStats.attackSpeed !== ""
                    ? heroBaseStats.attackSpeed
                    : "None",
                ]}
                atkRng={[
                  "Attack Range",
                  heroBaseStats.attackRange !== ""
                    ? heroBaseStats.attackRange
                    : "None",
                ]}
                role={["Role", heroStatsJson[heroIdTagger].basicInfo.role]}
                diff={[
                  "Difficulty",
                  heroStatsJson[heroIdTagger].basicInfo.difficulty,
                ]}
                price={[
                  "Price",
                  heroStatsJson[heroIdTagger].basicInfo.price + " Gold",
                ]}
                lore={[heroStatsJson[heroIdTagger].basicInfo.qoute]}
                heroId={heroIdTagger}
              />
            </RowCard>
          </React.Fragment>
        );
        break;
      case "doubleHero":
        template = (
          <React.Fragment>
            {hero.name.map((compact, i) => {
              return (
                <RowCard key={i}>
                  <InfoDisplayCard
                    name={[compact]}
                    title={hero.title}
                    logo={heroImage[heroIdTagger].logo}
                    atkType={[
                      "Attack Type",
                      typeof heroBaseStats.attackType === "string"
                        ? heroBaseStats.attackType
                        : heroBaseStats.attackType[i],
                    ]}
                    health={[
                      "Health",
                      typeof heroBaseStats.health === "string"
                        ? heroBaseStats.health
                        : heroBaseStats.health[i],
                    ]}
                    regen={[
                      "Regen",
                      typeof heroBaseStats.healthRegen === "string"
                        ? heroBaseStats.healthRegen
                        : heroBaseStats.healthRegen[i],
                    ]}
                    resources={[
                      "Resources",
                      heroBaseStats.resourceAmount +
                        heroBaseStats.resourceType ===
                      "None"
                        ? ""
                        : heroBaseStats.resourceAmount +
                          " " +
                          heroBaseStats.resourceType,
                    ]}
                    atkDmg={[
                      "Attack Damage",
                      typeof heroBaseStats.attackDamage === "string"
                        ? heroBaseStats.attackDamage
                        : heroBaseStats.attackDamage[i],
                    ]}
                    atkSpd={[
                      "Attack Speed",
                      typeof heroBaseStats.attackSpeed === "string"
                        ? heroBaseStats.attackSpeed
                        : heroBaseStats.attackSpeed[i],
                    ]}
                    atkRng={["Attack Range", heroBaseStats.attackRange[i]]}
                    role={["Role", heroStatsJson[heroIdTagger].basicInfo.role]}
                    diff={[
                      "Difficulty",
                      heroStatsJson[heroIdTagger].basicInfo.difficulty,
                    ]}
                    price={[
                      "Price",
                      heroStatsJson[heroIdTagger].basicInfo.price + " Gold",
                    ]}
                    lore={[heroStatsJson[heroIdTagger].basicInfo.qoute]}
                    heroId={heroIdTagger}
                  />
                </RowCard>
              );
            })}
          </React.Fragment>
        );
        break;
      case "threeHero":
        template = (
          <React.Fragment>
            {hero.name.map((compact, i) => {
              return (
                <RowCard type="wrapper" key={i}>
                  <InfoDisplayCard
                    name={[compact]}
                    title={hero.title}
                    logo={heroImage[heroIdTagger].logo}
                    atkType={[
                      "Attack Type",
                      typeof heroBaseStats.attackType === "string"
                        ? heroBaseStats.attackType
                        : heroBaseStats.attackType[i],
                    ]}
                    health={["Health", heroBaseStats.health[i]]}
                    regen={["Regen", heroBaseStats.healthRegen[i]]}
                    resources={[
                      "Resources",
                      heroBaseStats.resourceAmount === "None"
                        ? "None"
                        : heroBaseStats.resourceAmount +
                            " " +
                            heroBaseStats.resourceType ===
                          "None"
                        ? "None"
                        : heroBaseStats.resourceType,
                    ]}
                    atkDmg={["Attack Damage", heroBaseStats.attackDamage[i]]}
                    atkSpd={[
                      "Attack Speed",
                      typeof heroBaseStats.attackSpeed === "string"
                        ? heroBaseStats.attackSpeed
                        : heroBaseStats.attackSpeed[i],
                    ]}
                    atkRng={["Attack Range", heroBaseStats.attackRange[i]]}
                    role={["Role", heroStatsJson[heroIdTagger].basicInfo.role]}
                    diff={[
                      "Difficulty",
                      heroStatsJson[heroIdTagger].basicInfo.difficulty,
                    ]}
                    price={[
                      "Price",
                      heroStatsJson[heroIdTagger].basicInfo.price + " Gold",
                    ]}
                    lore={[heroStatsJson[heroIdTagger].basicInfo.qoute]}
                    heroId={heroIdTagger}
                  />
                </RowCard>
              );
            })}
          </React.Fragment>
        );
        break;
      default:
        template = null;
    }
    return template;
  }

  return (
    <>
      {typeof heroType === "string"
        ? renderHeroType("singleHero")
        : heroType.length < 3
        ? renderHeroType("doubleHero")
        : renderHeroType("threeHero")}
    </>
  );
};

export default Herotype;
