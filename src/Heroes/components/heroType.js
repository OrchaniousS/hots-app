import React, { PureComponent } from "react";

import Card from "../../Shared/components/card";
import RowCard from "../../Shared/components/rowCard";
import InfoDisplay from "../../Shared/components/infoDisplay";

import * as data from "../../data/jsonData/heroStats.json";
import * as imgData from "../../data/jsonData/heroData.json";
import styles from "../../app.module.css";

class Herotype extends PureComponent {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
    heroImage: JSON.parse(JSON.stringify(imgData)).default,
  };

  renderHeroType = (type) => {
    let template = null;
    switch (type) {
      case "singleHero":
        template = (
          <React.Fragment>
            <RowCard>
              <div className={styles.singleHero}>
                <InfoDisplay>
                  {
                    this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
                      .name
                  }
                </InfoDisplay>
                <InfoDisplay className="hero">
                  <div className={styles.heroTitle}>
                    {
                      this.state.heroStatsJson[this.props.heroIdTagger]
                        .basicInfo.title
                    }
                  </div>
                  <div className={styles.heroTitleImg}>
                    <img alt="miniIconhero" src={this.props.heroImage} />
                  </div>
                </InfoDisplay>
              </div>
            </RowCard>
            <RowCard>
              <InfoDisplay>
                <div>Attack Type</div>
                <div>
                  {
                    this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                      .attackType
                  }
                </div>
              </InfoDisplay>
              <InfoDisplay>
                <div>Health</div>
                <div>
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .health !== ""
                    ? this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.health
                    : "None"}
                </div>
              </InfoDisplay>
              <InfoDisplay>
                <div>Regen</div>
                <div>
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .healthRegen !== ""
                    ? this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.healthRegen
                    : "None"}
                </div>
              </InfoDisplay>
              <InfoDisplay>
                <div>
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .resourceAmount === "0"
                    ? "Resources"
                    : "Resources"}
                </div>
                <div>
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .resourceAmount === "0" || "undefined"
                    ? "None"
                    : this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.resourceAmoun + " "}
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .resourceType === "None"
                    ? ""
                    : this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.resourceType}
                </div>
              </InfoDisplay>
              <InfoDisplay>
                <div>Attack Damge</div>
                <div>
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .attackDamage !== ""
                    ? this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.attackDamage
                    : "None"}
                </div>
              </InfoDisplay>
              <InfoDisplay>
                <div>Attack Speed</div>
                <div>
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .attackSpeed !== ""
                    ? this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.attackSpeed
                    : "None"}
                </div>
              </InfoDisplay>
              <InfoDisplay>
                <div>Attack Range</div>
                <div>
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .attackRange !== ""
                    ? this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.attackRange
                    : "None"}
                </div>
              </InfoDisplay>
            </RowCard>
          </React.Fragment>
        );
        break;
      case "doubleHero":
        template = (
          <div className={styles.multiplyHero}>
            {this.state.heroStatsJson[
              this.props.heroIdTagger
            ].basicInfo.name.map((compact, i) => {
              return (
                <div key={i} className={styles.heroRightInfo}>
                  <div className={styles.heroName}>
                    {compact}
                    <div className={styles.heroTitle}>
                      {
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .basicInfo.title
                      }
                    </div>
                    <div className={styles.heroTitleImg}>
                      <img alt="miniIconhero" src={this.props.heroImage} />
                    </div>
                  </div>
                  <div className={styles.heroBaseStats}>
                    <div>
                      Attack Type:{" "}
                      {typeof this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.attackType === "string"
                        ? this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackType
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackType[i]}
                    </div>
                    <div>
                      Health:{" "}
                      {typeof this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.health === "string"
                        ? this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.health
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.health[i]}
                    </div>
                    <div>
                      Regen:{" "}
                      {typeof this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.healthRegen === "string"
                        ? this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.healthRegen
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.healthRegen[i]}
                    </div>
                    <div>
                      {this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.resourceAmount === "None"
                        ? ""
                        : "Resource: " +
                          this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.resourceAmount}{" "}
                      {this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.resourceType === "None"
                        ? ""
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.resourceType}
                    </div>
                    <div>
                      Attack Damge:{" "}
                      {typeof this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.attackDamage === "string"
                        ? this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackDamage
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackDamage[i]}
                    </div>
                    <div>
                      Attack Speed:{" "}
                      {typeof this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.attackSpeed === "string"
                        ? this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackSpeed
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackSpeed[i]}
                    </div>
                    <div>
                      Attack Range:{" "}
                      {
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackRange[i]
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
        break;
      case "threeHero":
        template = (
          <div className={styles.multiplyHero}>
            {this.state.heroStatsJson[
              this.props.heroIdTagger
            ].basicInfo.name.map((compact, i) => {
              return (
                <div key={i} className={styles.heroRightInfo}>
                  <div className={styles.heroName}>
                    {compact}
                    <div className={styles.heroTitle}>
                      {
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .basicInfo.title
                      }
                    </div>
                    <div className={styles.heroTitleImg}>
                      <img alt="miniIconhero" src={this.props.heroImage} />
                    </div>
                  </div>
                  <div className={styles.heroBaseStats}>
                    <div>
                      Attack Type:{" "}
                      {typeof this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.attackType === "string"
                        ? this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackType
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackType[i]}
                    </div>
                    <div>
                      Health:{" "}
                      {
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.health[i]
                      }
                    </div>
                    <div>
                      Regen:{" "}
                      {
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.healthRegen[i]
                      }
                    </div>
                    <div>
                      {this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.resourceAmount === "None"
                        ? ""
                        : " Resource: " +
                          this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.resourceAmount}{" "}
                      {this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.resourceType === "None"
                        ? ""
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.resourceType}
                    </div>
                    <div>
                      Attack Damge:{" "}
                      {
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackDamage[i]
                      }
                    </div>
                    <div>
                      Attack Speed:{" "}
                      {typeof this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.attackSpeed === "string"
                        ? this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackSpeed
                        : this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.attackSpeed[i]}
                    </div>
                    <div>
                      Attack Range:{" "}
                      {
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackRange[i]
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    let heroType = this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
      .name;
    return (
      <Card>
        {typeof heroType === "string"
          ? this.renderHeroType("singleHero")
          : heroType.length < 3
          ? this.renderHeroType("doubleHero")
          : this.renderHeroType("threeHero")}
      </Card>
    );
  }
}

export default Herotype;
