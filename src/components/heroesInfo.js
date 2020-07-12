import React, { PureComponent } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// import styles from "../app.module.css";
import * as data from "../data/jsonData/heroData.json";
import Heroes from "../components/heroes";
import HeroesData from "../data/heroesData/heroesData";

class HeroStats extends PureComponent {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)).default,
    heroIdInfo: this.props.heroId,
  };
  heroURL = () =>
    this.state.heroStatsJson.map((link, index) => (
      <div key={index}>
        <Route
          exact
          path={`/heroes/${link.name.toLowerCase()}`}
          render={() => (
            <Heroes
              heroImage={link.logo}
              heroId={link.id}
              heroName={link.name}
            />
          )}
        />
      </div>
    ));

  render() {
    return (
      <React.Fragment>
        <Switch>
          <BrowserRouter>
            <Route
              key={this.props.title}
              exact
              path="/heroes"
              render={() => <HeroesData title={this.props.title} />}
            />
            {this.heroURL()}
          </BrowserRouter>
        </Switch>
      </React.Fragment>
    );
  }
}

export default HeroStats;
