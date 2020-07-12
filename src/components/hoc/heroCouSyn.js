import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import styles from "../../app.module.css";
import * as mcsData from "../../data/jsonData/hotsCouSyn.json";

class HeroCouSyn extends PureComponent {
  state = {
    heroCounterSynergy: JSON.parse(JSON.stringify(mcsData)).default,
  };

  render() {
    return (
      <div className={styles.heroLeftInfo}>
        <div className={styles.heroSynCou}>
          <table className={styles.heroTableCouSyn}>
            <thead>
              <tr>
                <th className={styles.heroSyn}>
                  <div className={styles.heroSynCouTitle}>
                    {
                      this.state.heroCounterSynergy[this.props.heroIdTagger]
                        .heroName
                    }{" "}
                    synergizes with
                  </div>
                </th>
                <th className={styles.heroCou}>
                  <div className={styles.heroSynCouTitle}>
                    {
                      this.state.heroCounterSynergy[this.props.heroIdTagger]
                        .heroName
                    }{" "}
                    is countered by
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.heroSynergyCounter}>
                    {this.state.heroCounterSynergy[
                      this.props.heroIdTagger
                    ].heroSynergy.map((el, i) => {
                      return (
                        <div key={i} className={styles.heroCSingle}>
                          <Link
                            to={
                              el.heroSynergyName === "sgt-hammer"
                                ? "sgt. hammer"
                                : el.heroSynergyName &&
                                  el.heroSynergyName === "kaelthas"
                                ? "kael'thas"
                                : el.heroSynergyName &&
                                  el.heroSynergyName === "lucio"
                                ? "Lúcio"
                                : el.heroSynergyName
                            }
                          >
                            <img
                              alt={this.src}
                              src={`https://www.heroesfire.com/images/wikibase/icon/heroes/${
                                el.heroSynergyName === "e.t.c."
                                  ? "etc"
                                  : el.heroSynergyName
                              }.png`}
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className={styles.heroSynergyCounter}>
                    {this.state.heroCounterSynergy[
                      this.props.heroIdTagger
                    ].heroCounter.map((el, i) => {
                      return (
                        <div key={i} className={styles.heroCSingle}>
                          <Link
                            to={
                              el.heroCounterName === "sgt-hammer"
                                ? "sgt. hammer"
                                : el.heroCounterName &&
                                  el.heroCounterName === "kaelthas"
                                ? "kael'thas"
                                : el.heroCounterName &&
                                  el.heroCounterName === "lucio"
                                ? "lúcio"
                                : el.heroCounterName
                            }
                          >
                            <img
                              alt={this.src}
                              src={`https://www.heroesfire.com/images/wikibase/icon/heroes/${
                                el.heroCounterName === "e.t.c."
                                  ? "etc"
                                  : el.heroCounterName
                              }.png`}
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className={styles.heroTableCouSyn}>
            <thead>
              <tr>
                <th>
                  <div className={styles.heroSynCouTitle}>
                    {
                      this.state.heroCounterSynergy[this.props.heroIdTagger]
                        .heroName
                    }
                    `s Stronger Maps
                  </div>
                </th>
                <th>
                  <div className={styles.heroSynCouTitle}>
                    {
                      this.state.heroCounterSynergy[this.props.heroIdTagger]
                        .heroName
                    }
                    `s Average Maps
                  </div>
                </th>
                <th>
                  <div className={styles.heroSynCouTitle}>
                    {
                      this.state.heroCounterSynergy[this.props.heroIdTagger]
                        .heroName
                    }
                    `s Weaker Maps
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.heroSynergyCounter}>
                    {this.state.heroCounterSynergy[
                      this.props.heroIdTagger
                    ].strongMap.map((el, i) => {
                      return (
                        <div key={i} className={styles.heroCSingle}>
                          {el.strongMapName === "None" ? (
                            <div>None</div>
                          ) : (
                            <Link to={`/maps/${el.strongMapName}`}>
                              <img
                                alt={this.src}
                                src={`../images/maps/${el.strongMapName}.jpg`}
                              />
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className={styles.heroSynergyCounter}>
                    {this.state.heroCounterSynergy[
                      this.props.heroIdTagger
                    ].naturalMap.map((el, i) => {
                      return (
                        <div key={i} className={styles.heroCSingle}>
                          {el.naturalMapName === "None" ? (
                            <div>None</div>
                          ) : (
                            <Link to={`/maps/${el.naturalMapName}`}>
                              <img
                                alt={this.src}
                                src={`../images/maps/${el.naturalMapName}.jpg`}
                              />
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className={styles.heroSynergyCounter}>
                    {this.state.heroCounterSynergy[
                      this.props.heroIdTagger
                    ].weakMap.map((el, i) => {
                      return (
                        <div key={i} className={styles.heroCSingle}>
                          {el.weakMapName === "None" ? (
                            <div>None</div>
                          ) : (
                            <Link to={`/maps/${el.weakMapName}`}>
                              <img
                                alt={this.src}
                                src={`../images/maps/${el.weakMapName}.jpg`}
                              />
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default HeroCouSyn;
