import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import data from "../data/heroData.json";
import Heroes from "./heroes";
import HeroesData from "../data/heroesData";

const HeroStats = () => {
  // const [heroDisplay, setHeroDisplay] = useState(null);

  const heroStatsJson = JSON.parse(JSON.stringify(data));
  // console.log(heroDisplay);
  useEffect(() => {
    // console.log(heroDisplay);
    // setHeroDisplay(null);
    // console.log(heroDisplay);
  }, []);

  const heroURL = () =>
    heroStatsJson.map((link, index) => (
      <Route
        key={index}
        exact
        path={`/heroes/${link.name.toLowerCase()}`}
        render={() => (
          <Heroes
            // heroClicker={setHeroDisplay(link.name)}
            heroImage={link.logo}
            heroId={link.id}
            heroName={link.name}
          />
        )}
      />
    ));

  return (
    <>
      <Switch>
        <BrowserRouter>
          {/* {heroDisplay === null ? ( */}
          <Route exact path="/heroes" render={() => <HeroesData />} />
          {/* ) : null} */}
          {heroURL()}
        </BrowserRouter>
      </Switch>
    </>
  );
};

export default HeroStats;
