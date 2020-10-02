import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Heroes from "./heroes";
import HeroesData from "../data/heroesData";
import data from "../data/heroData.json";

const HeroStats = () => {
  const heroStatsJson = JSON.parse(JSON.stringify(data));

  const heroURL = () =>
    heroStatsJson.map((link, index) => (
      <Route
        key={index}
        exact
        path={`/heroes/${link.name.toLowerCase()}`}
        render={() => (
          <Heroes heroImage={link.logo} heroId={link.id} heroName={link.name} />
        )}
      />
    ));

  return (
    <>
      <Switch>
        <BrowserRouter>
          <Route exact path="/heroes" render={() => <HeroesData />} />
          {heroURL()}
        </BrowserRouter>
      </Switch>
    </>
  );
};

export default HeroStats;
