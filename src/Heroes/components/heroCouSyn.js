import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import RowCard from "../../Shared/components/rowCard";
import InfoDisplayCouSyn from "../../Shared/components/infoDisplayCouSyn";

import mcsData from "../data/hotsCouSyn.json";
import styles from "./heroCouSyn.module.css";

class HeroCouSyn extends PureComponent {
  state = {
    heroCounterSynergy: JSON.parse(JSON.stringify(mcsData)),
  };

  render() {
    return (
      <React.Fragment>
        <RowCard>
          <InfoDisplayCouSyn
            type="synergy"
            headVal={
              this.state.heroCounterSynergy[this.props.heroIdTagger].heroName +
              " synergizes with"
            }
            value={this.state.heroCounterSynergy[
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
                        : el.heroSynergyName && el.heroSynergyName === "lucio"
                        ? "Lúcio"
                        : el.heroSynergyName &&
                          el.heroSynergyName === "the-butcher"
                        ? "the butcher"
                        : el.heroSynergyName &&
                          el.heroSynergyName === "anubarak"
                        ? "Anub'arak"
                        : el.heroSynergyName
                    }
                  >
                    <h4>
                      {el.heroSynergyName === "the-butcher"
                        ? "The Butcher"
                        : el.heroSynergyName.charAt(0).toUpperCase() +
                            el.heroSynergyName.slice(1) &&
                          el.heroSynergyName === "e.t.c."
                        ? "E.T.C."
                        : el.heroSynergyName.charAt(0).toUpperCase() +
                            el.heroSynergyName.slice(1) &&
                          el.heroSynergyName === "sgt-hammer"
                        ? "Sgt. Hammer"
                        : el.heroSynergyName.charAt(0).toUpperCase() +
                            el.heroSynergyName.slice(1) &&
                          el.heroSynergyName === "anubarak"
                        ? "Anub'arak"
                        : el.heroSynergyName.charAt(0).toUpperCase() +
                          el.heroSynergyName.slice(1)}
                    </h4>
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
          />
          <InfoDisplayCouSyn
            type="counter"
            headVal={
              this.state.heroCounterSynergy[this.props.heroIdTagger].heroName +
              " is countered by"
            }
            value={this.state.heroCounterSynergy[
              this.props.heroIdTagger
            ].heroCounter.map((el, i) => {
              return (
                <div key={i} className={styles.heroCSingle}>
                  <Link
                    to={
                      el.heroCounterName === "sgt-hammer"
                        ? "sgt. hammer"
                        : el.heroCounterName &&
                          el.heroCounterName === "anubarak"
                        ? "Anub'arak"
                        : el.heroCounterName &&
                          el.heroCounterName === "kaelthas"
                        ? "kael'thas"
                        : el.heroCounterName && el.heroCounterName === "lucio"
                        ? "lúcio"
                        : el.heroCounterName &&
                          el.heroCounterName === "the-butcher"
                        ? "the butcher"
                        : el.heroCounterName &&
                          el.heroCounterName === "sgt-hammer"
                        ? "Sgt. Hammer"
                        : el.heroCounterName.charAt(0).toUpperCase() +
                          el.heroCounterName.slice(1)
                    }
                  >
                    <h4>
                      {el.heroCounterName === "the-butcher"
                        ? "The Butcher"
                        : el.heroCounterName.charAt(0).toUpperCase() +
                            el.heroCounterName.slice(1) &&
                          el.heroCounterName === "anubarak"
                        ? "Anub'arak"
                        : el.heroCounterName.charAt(0).toUpperCase() +
                          el.heroCounterName.slice(1)}
                    </h4>
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
          />
          <InfoDisplayCouSyn
            type="stronger"
            headVal={
              this.state.heroCounterSynergy[this.props.heroIdTagger].heroName +
              " `s Stronger Maps"
            }
            value={this.state.heroCounterSynergy[
              this.props.heroIdTagger
            ].strongMap.map((el, i) => {
              return (
                <div key={i} className={styles.heroCSingle}>
                  {el.strongMapName === "None" ? (
                    <div>None</div>
                  ) : (
                    <Link to={`/maps/${el.strongMapName}`}>
                      <h4>
                        {el.strongMapName.charAt(0).toUpperCase() +
                          el.strongMapName.slice(1)}
                      </h4>
                      <img
                        alt={this.src}
                        src={`../images/maps/${el.strongMapName}.jpg`}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          />
          <InfoDisplayCouSyn
            type="average"
            headVal={
              this.state.heroCounterSynergy[this.props.heroIdTagger].heroName +
              " `s Average Maps"
            }
            value={this.state.heroCounterSynergy[
              this.props.heroIdTagger
            ].naturalMap.map((el, i) => {
              return (
                <div key={i} className={styles.heroCSingle}>
                  {el.naturalMapName === "None" ? (
                    <div>None</div>
                  ) : (
                    <Link to={`/maps/${el.naturalMapName}`}>
                      <h4>
                        {el.naturalMapName.charAt(0).toUpperCase() +
                          el.naturalMapName.slice(1)}
                      </h4>

                      <img
                        alt={this.src}
                        src={`../images/maps/${el.naturalMapName}.jpg`}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          />
          <InfoDisplayCouSyn
            type="weaker"
            headVal={
              this.state.heroCounterSynergy[this.props.heroIdTagger].heroName +
              " `s Weaker Maps"
            }
            value={this.state.heroCounterSynergy[
              this.props.heroIdTagger
            ].weakMap.map((el, i) => {
              return (
                <div key={i} className={styles.heroCSingle}>
                  {el.weakMapName === "None" ? (
                    <div>None</div>
                  ) : (
                    <Link to={`/maps/${el.weakMapName}`}>
                      <h4>
                        {el.weakMapName.charAt(0).toUpperCase() +
                          el.weakMapName.slice(1)}
                      </h4>
                      <img
                        alt={this.src}
                        src={`../images/maps/${el.weakMapName}.jpg`}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          />
        </RowCard>
      </React.Fragment>
    );
  }
}

export default HeroCouSyn;
