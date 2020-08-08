import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import data from "../data/heroData.json";
import Heroes from "./heroes";
import HeroesData from "../data/heroesData";

const HeroStats = (props) => {
  const { title } = props;

  const heroStatsJson = JSON.parse(JSON.stringify(data));

  const heroURL = () =>
    heroStatsJson.map((link, index) => (
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

  return (
    <React.Fragment>
      <Switch>
        <BrowserRouter>
          <Route
            key={title}
            exact
            path="/heroes"
            render={() => <HeroesData title={title} />}
          />
          {heroURL()}
        </BrowserRouter>
      </Switch>
    </React.Fragment>
  );
};

export default HeroStats;
