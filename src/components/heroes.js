import React, { Component } from "react";

import styles from "../app.module.css";
import * as data from "../data/jsonData/heroStats.json";

class Heroes extends Component {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
    heroIdInfo: this.props.heroId,
    heroImageInfo: this.props.heroImage,
  };

  renderHeroType = (type) => {
    let template = null;
    switch (type) {
      case "singleHero":
        template = (
          <div className={styles.heroRightInfo}>
            <div className={styles.heroName}>
              {this.state.heroStatsJson[this.state.heroIdInfo].basicInfo.name}
              <div className={styles.heroTitle}>
                {
                  this.state.heroStatsJson[this.state.heroIdInfo].basicInfo
                    .title
                }
              </div>
              <div className={styles.heroTitleImg}>
                <img alt="miniIconhero" src={this.state.heroImageInfo} />
              </div>
            </div>
            <div className={styles.heroBaseStats}>
              <div>
                Attack Type:{" "}
                {
                  this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                    .attackType
                }
              </div>
              <div>
                Health:{" "}
                {
                  this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                    .health
                }
              </div>
              <div>
                Regen:{" "}
                {
                  this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                    .healthRegen
                }
              </div>
              <div>
                {this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                  .resourceAmount === "0"
                  ? ""
                  : "Resource: " +
                    this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                      .resourceAmount}{" "}
                {this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                  .resourceType === "None"
                  ? ""
                  : this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                      .resourceType}
              </div>
              <div>
                Attack Damge:{" "}
                {
                  this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                    .attackDamage
                }
              </div>
              <div>
                Attack Speed:{" "}
                {
                  this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                    .attackSpeed
                }
              </div>
              <div>
                Attack Range:{" "}
                {
                  this.state.heroStatsJson[this.state.heroIdInfo].baseStats
                    .attackRange
                }
              </div>
            </div>
          </div>
        );
        break;
      case "doubleHero":
        template = (
          <div className={styles.multiplyHero}>
            {this.state.heroStatsJson[this.state.heroIdInfo].basicInfo.name.map(
              (compact, i) => {
                return (
                  <div key={i} className={styles.heroRightInfo}>
                    <div className={styles.heroName}>
                      {compact}
                      <div className={styles.heroTitle}>
                        {
                          this.state.heroStatsJson[this.state.heroIdInfo]
                            .basicInfo.title
                        }
                      </div>
                      <div className={styles.heroTitleImg}>
                        <img
                          alt="miniIconhero"
                          src={this.state.heroImageInfo}
                        />
                      </div>
                    </div>
                    <div className={styles.heroBaseStats}>
                      <div>
                        Attack Type:{" "}
                        {typeof this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.attackType === "string"
                          ? this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackType
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackType[i]}
                      </div>
                      <div>
                        Health:{" "}
                        {typeof this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.health === "string"
                          ? this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.health
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.health[i]}
                      </div>
                      <div>
                        Regen:{" "}
                        {typeof this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.healthRegen === "string"
                          ? this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.healthRegen
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.healthRegen[i]}
                      </div>
                      <div>
                        {this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.resourceAmount === "None"
                          ? ""
                          : "Resource: " +
                            this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.resourceAmount}{" "}
                        {this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.resourceType === "None"
                          ? ""
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.resourceType}
                      </div>
                      <div>
                        Attack Damge:{" "}
                        {typeof this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.attackDamage === "string"
                          ? this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackDamage
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackDamage[i]}
                      </div>
                      <div>
                        Attack Speed:{" "}
                        {typeof this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.attackSpeed === "string"
                          ? this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackSpeed
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackSpeed[i]}
                      </div>
                      <div>
                        Attack Range:{" "}
                        {
                          this.state.heroStatsJson[this.state.heroIdInfo]
                            .baseStats.attackRange[i]
                        }
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        );
        break;
      case "threeHero":
        template = (
          <div className={styles.multiplyHero}>
            {this.state.heroStatsJson[this.state.heroIdInfo].basicInfo.name.map(
              (compact, i) => {
                return (
                  <div key={i} className={styles.heroRightInfo}>
                    <div className={styles.heroName}>
                      {compact}
                      <div className={styles.heroTitle}>
                        {
                          this.state.heroStatsJson[this.state.heroIdInfo]
                            .basicInfo.title
                        }
                      </div>
                      <div className={styles.heroTitleImg}>
                        <img
                          alt="miniIconhero"
                          src={this.state.heroImageInfo}
                        />
                      </div>
                    </div>
                    <div className={styles.heroBaseStats}>
                      <div>
                        Attack Type:{" "}
                        {typeof this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.attackType === "string"
                          ? this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackType
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackType[i]}
                      </div>
                      <div>
                        Health:{" "}
                        {
                          this.state.heroStatsJson[this.state.heroIdInfo]
                            .baseStats.health[i]
                        }
                      </div>
                      <div>
                        Regen:{" "}
                        {
                          this.state.heroStatsJson[this.state.heroIdInfo]
                            .baseStats.healthRegen[i]
                        }
                      </div>
                      <div>
                        {this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.resourceAmount === "None"
                          ? ""
                          : " Resource: " +
                            this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.resourceAmount}{" "}
                        {this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.resourceType === "None"
                          ? ""
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.resourceType}
                      </div>
                      <div>
                        Attack Damge:{" "}
                        {
                          this.state.heroStatsJson[this.state.heroIdInfo]
                            .baseStats.attackDamage[i]
                        }
                      </div>
                      <div>
                        Attack Speed:{" "}
                        {typeof this.state.heroStatsJson[this.state.heroIdInfo]
                          .baseStats.attackSpeed === "string"
                          ? this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackSpeed
                          : this.state.heroStatsJson[this.state.heroIdInfo]
                              .baseStats.attackSpeed[i]}
                      </div>
                      <div>
                        Attack Range:{" "}
                        {
                          this.state.heroStatsJson[this.state.heroIdInfo]
                            .baseStats.attackRange[i]
                        }
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        );
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    let heroType = this.state.heroStatsJson[this.state.heroIdInfo].basicInfo
      .name;
    return (
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.heroMainInfo}>
            <div className={styles.heroRightInfo}>
              <div>heroname</div>
              <div>heroFullPicture</div>
              <div>little franchise + role icon</div>
            </div>
            <div className={styles.heroRightInfo}>
              <div className={styles.basicInfo}>
                <div className={styles.heroBaseStats}>Role: b</div>
                <div className={styles.heroBaseStats}>Difficulty: s</div>
                <div className={styles.heroBaseStats}>Price: s</div>
              </div>
            </div>
            <div className={styles.heroLeftInfo}>
              <div className={styles.heroSynCou}>
                <div>Synergy Heroes</div>
                <div>Counter Heroes</div>
              </div>
              <div className={styles.mapSynCou}>
                <div>Synergy Maps</div>
                <div>Counter Maps</div>
              </div>
            </div>
          </div>
          <div className={styles.heroMainInfo}>
            {typeof heroType === "string"
              ? this.renderHeroType("singleHero")
              : heroType.length < 3
              ? this.renderHeroType("doubleHero")
              : this.renderHeroType("threeHero")}
          </div>
          <div className={styles.heroMainInfo}>
            <div className={styles.heroQoute}>
              <div>
                {" "}
                {
                  this.state.heroStatsJson[this.state.heroIdInfo].basicInfo
                    .qoute
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Heroes;
