import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Maps from "./components/maps";
import styles from "./app.module.css";
import HeroStats from "./components/heroesInfo";

class App extends Component {
  state = {
    homeTitle: "Weekly Rotation",
    navTitle: "Herores of the Storm",
    heroesTitle: "Heroes",
    mapsTitle: "Maps quick info",
    links: ["Home", "Heroes", "Maps"],
    paths: ["/", "/heroes", "/maps"],
  };

  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <header>
            <Navbar
              paths={this.state.paths}
              links={this.state.links}
              title={this.state.navTitle}
            ></Navbar>
          </header>
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
              render={() => <Home title={this.state.homeTitle} />}
            />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
