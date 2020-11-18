import React, { useState, useEffect } from "react";

const WeeklyApi = ({ styles }) => {
  const [responseAPI, setResponseAPI] = useState();

  useEffect(() => {
    const request = require("request");
    request(
      "https://hots-web-api.herokuapp.com/week",
      (response, error, body) => {
        setResponseAPI(JSON.parse(body));
      }
    );
  }, []);

  const apiIsNotLoaded = () => (
    <div className={styles.centered}>
      <div className={styles.spinnerLoading}></div>
      <div className={styles.loadingText}>Loading...</div>
    </div>
  );

  const apiIsLoaded = () =>
    responseAPI.slice(2).map(({ heroLink, heroName }) => (
      <div key={heroName}>
        <div className={styles.mapHexIcon}>
          <img className={styles.mapHexIconimg} alt={heroName} src={heroLink} />
        </div>
        <a href={`/heroes/${heroName}`}>
          <div className={styles.mapHexaBG}>
            <span className={styles.mapHexaBGName}>{heroName}</span>
          </div>
        </a>
      </div>
    ));

  return (
    <>
      <div className={styles.mapContainer}>
        <div className={styles.mapHexCollage}>
          {responseAPI === undefined ? apiIsNotLoaded() : apiIsLoaded()}
        </div>
      </div>
    </>
  );
};

export default WeeklyApi;
