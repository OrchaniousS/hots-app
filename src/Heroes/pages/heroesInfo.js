import React, { PureComponent } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import data from "../data/heroData.json";
import Heroes from "./heroes";
import HeroesData from "../data/heroesData";

class HeroStats extends PureComponent {
  state = {
    heroStatsJson: JSON.parse(JSON.stringify(data)),
    heroIdInfo: this.props.heroId,
  };
  heroURL = () =>
    this.state.heroStatsJson.map((link, index) => (
      <React.Fragment key={index}>
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
      </React.Fragment>
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
