import React, { PureComponent, useState } from "react";

import Card from "../../Shared/components/card";
import RowCard from "../../Shared/components/rowCard";
import InfoDisplay from "../../Shared/components/infoDisplay";
import InfoDisplayHero from "../../Shared/components/infoDisplayHero";
import InfoDisplayMulti from "../../Shared/components/infoDisplayMulti";

import data from "../data/heroStats.json";
import imgData from "../data/heroData.json";
import styles from "../../app.module.css";

class Herotype extends PureComponent {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)),
    heroImage: JSON.parse(JSON.stringify(imgData)),
  };

  expandClassHandler = (option) => {
    const [stateExpanded, setstateExpanded] = useState(option);
  };

  renderHeroType = (type) => {
    let template = null;
    switch (type) {
      case "singleHero":
        template = (
          <React.Fragment>
            <RowCard>
              <div className={styles.singleHero}>
                <InfoDisplayHero>
                  {
                    this.state.heroStatsJson[this.props.heroIdTagger].basicInfo
                      .name
                  }
                </InfoDisplayHero>
                <InfoDisplayHero>
                  <div className={styles.heroTitle}>
                    {
                      this.state.heroStatsJson[this.props.heroIdTagger]
                        .basicInfo.title
                    }
                  </div>
                  <div className={styles.heroTitleImg}>
                    <img alt="miniIconhero" src={this.props.heroImage} />
                  </div>
                </InfoDisplayHero>
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
                <div>Resources</div>
                <div>
                  {this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .resourceAmount !== " " &&
                  this.state.heroStatsJson[this.props.heroIdTagger].baseStats
                    .resourceAmount.length < 1
                    ? "None"
                    : this.state.heroStatsJson[this.props.heroIdTagger]
                        .baseStats.resourceAmount + " "}
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
          <React.Fragment>
            {this.state.heroStatsJson[
              this.props.heroIdTagger
            ].basicInfo.name.map((compact, i) => {
              return (
                <React.Fragment key={i}>
                  <RowCard>
                    <div className={styles.singleHero}>
                      <InfoDisplayHero>{compact}</InfoDisplayHero>
                      <InfoDisplayHero>
                        <div className={styles.heroTitle}>
                          {
                            this.state.heroStatsJson[this.props.heroIdTagger]
                              .basicInfo.title
                          }
                        </div>
                        <div className={styles.heroTitleImg}>
                          <img alt="miniIconhero" src={this.props.heroImage} />
                        </div>
                      </InfoDisplayHero>
                    </div>
                  </RowCard>
                  <RowCard>
                    <InfoDisplayMulti
                      headVal="Attack Type"
                      value={
                        typeof this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackType === "string"
                          ? this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackType
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackType[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Health"
                      value={
                        typeof this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.health === "string"
                          ? this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.health
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.health[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Regen"
                      value={
                        typeof this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.healthRegen === "string"
                          ? this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.healthRegen
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.healthRegen[i]
                      }
                    />

                    <InfoDisplayMulti
                      headVal="Resources"
                      value={
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.resourceAmount +
                          this.state.heroStatsJson[this.props.heroIdTagger]
                            .baseStats.resourceType ===
                        "None"
                          ? ""
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.resourceAmount +
                            " " +
                            this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.resourceType
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Damge"
                      value={
                        typeof this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackDamage === "string"
                          ? this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackDamage
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackDamage[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Speed"
                      value={
                        typeof this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackSpeed === "string"
                          ? this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackSpeed
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackSpeed[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Range"
                      value={
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackRange[i]
                      }
                    />
                  </RowCard>
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
        break;
      case "threeHero":
        template = (
          <React.Fragment>
            {this.state.heroStatsJson[
              this.props.heroIdTagger
            ].basicInfo.name.map((compact, i) => {
              return (
                <React.Fragment key={i}>
                  <RowCard>
                    <div className={styles.singleHero}>
                      <InfoDisplayHero>{compact}</InfoDisplayHero>
                      <InfoDisplayHero>
                        {
                          this.state.heroStatsJson[this.props.heroIdTagger]
                            .basicInfo.title
                        }
                        <div className={styles.heroTitleImg}>
                          <img alt="miniIconhero" src={this.props.heroImage} />
                        </div>
                      </InfoDisplayHero>
                    </div>
                  </RowCard>
                  <RowCard>
                    <InfoDisplayMulti
                      headVal="Attack Type"
                      value={
                        typeof this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackType === "string"
                          ? this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackType
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackType[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Health"
                      value={
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.health[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Regen"
                      value={
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.healthRegen[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Reources"
                      value={
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.resourceAmount === "None"
                          ? "None"
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.resourceAmount +
                              " " +
                              this.state.heroStatsJson[this.props.heroIdTagger]
                                .baseStats.resourceType ===
                            "None"
                          ? "None"
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.resourceType
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Damge"
                      value={
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackDamage[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Speed"
                      value={
                        typeof this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackSpeed === "string"
                          ? this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackSpeed
                          : this.state.heroStatsJson[this.props.heroIdTagger]
                              .baseStats.attackSpeed[i]
                      }
                    />
                    <InfoDisplayMulti
                      headVal="Attack Range"
                      value={
                        this.state.heroStatsJson[this.props.heroIdTagger]
                          .baseStats.attackRange[i]
                      }
                    />
                  </RowCard>
                </React.Fragment>
              );
            })}
          </React.Fragment>
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
