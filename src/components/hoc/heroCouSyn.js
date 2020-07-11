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
          <div className={styles.heroSynCouTitle}>Synergy Heroes</div>
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
                        : el.heroSynergyName ||
                          el.heroSynergyName === "kaelthas"
                        ? "kael'thas"
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
          <div className={styles.heroSynCouTitle}>Counter Heroes</div>
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
          <div className={styles.heroSynCouTitle}>Strong Maps</div>
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
          <div className={styles.heroSynCouTitle}>Natural Maps</div>
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
          <div className={styles.heroSynCouTitle}>Weak Maps</div>
          <div className={styles.heroSynergyCounter}>
            {this.state.heroCounterSynergy[this.props.heroIdTagger].weakMap.map(
              (el, i) => {
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
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HeroCouSyn;
