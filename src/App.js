import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

import Navbar from "./Shared/nav/navbar";
import Home from "./Home/pages/home";
import Maps from "./Maps//pages/maps";
import HeroStats from "./Heroes/pages/heroesInfo";

import styles from "./app.module.css";

const App = () => {
  return (
    <HttpsRedirect>
      <BrowserRouter>
        <main className={styles.app}>
          <Navbar />
          <Switch>
            <Route path="/heroes" render={() => <HeroStats />} />
            <Route path="/maps" render={() => <Maps />} />
            <Route path="/" render={() => <Home />} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </main>
      </BrowserRouter>
    </HttpsRedirect>
  );
};

export default App;
