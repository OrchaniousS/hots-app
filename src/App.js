import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

import Navbar from "./Shared/nav/navbar";
import Home from "./Home/pages/home";
import Maps from "./Maps//pages/maps";
import HeroStats from "./Heroes/pages/heroesInfo";
import styles from "./app.module.css";

class App extends Component {
  state = {
    navTitle: "Heroes of the Storm",
    heroesTitle: "Heroes",
    mapsTitle: "Maps quick info",
    links: ["Home", "Heroes", "Maps"],
    paths: ["/", "/heroes", "/maps"],
  };

  render() {
    return (
      <HttpsRedirect>
        <BrowserRouter>
          <div className={styles.app}>
            <Navbar
              paths={this.state.paths}
              links={this.state.links}
              title={this.state.navTitle}
            ></Navbar>
            <Switch>
              <Route
                path="/heroes"
                render={() => <HeroStats title={this.state.heroesTitle} />}
              />
              <Route
                path="/maps"
                render={() => <Maps title={this.state.mapsTitle} />}
              />
              <Route
                // exact
                path="/"
                render={() => <Home />}
              />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </BrowserRouter>
      </HttpsRedirect>
    );
  }
}

export default App;
