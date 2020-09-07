import React, { useState, useEffect } from "react";

import MainContainer from "../../Shared/components/mainContainer";
import styles from "./home.module.css";

// const scraperapiClient = require("scraperapi-sdk")(
//   "0cee0c963a5f7029df77efe22f18c3f6"
// );

const Home = () => {
  const [textDate, setTextDate] = useState();
  const [monthDate, setMonthDate] = useState("");
  const [dayDate, setDayDate] = useState("");
  const [responseAPI, setResponseAPI] = useState();
  // const bHTMLSPLIT = [];

  useEffect(() => {
    // need better month detector
    const d = new Date();
    const dateToDay = d.getDay();
    const dateToMonth = d.getMonth();

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    setMonthDate(month[dateToMonth]);
    setDayDate(d.getDate());

    setTextDate(
      dateToDay === 2
        ? setMonthDate(month[dateToMonth]) &&
            setDayDate(d.getUTCDate()) &&
            monthDate + ", " + dayDate + " "
        : monthDate + ", " + dayDate + " "
    );

    const request = require("request");
    request(
      "https://hots-web-api.herokuapp.com/week",
      (error, response, body) => {
        // console.error("error:", error);
        // console.log("statusCode:", response && response.statusCode);
        // console.log("body:", body);
        setResponseAPI(JSON.parse(body));
      }
    );
  }, [monthDate, dayDate]);

  return (
    <MainContainer>
      <h2>{`Weekly Rotation - [${textDate}]`}</h2>
      <div className={styles.mapContainer}>
        <div className={styles.mapHexCollage}>
          {responseAPI === undefined ? (
            <div className={styles.centered}>
              <div className={styles.spinnerLoading}></div>
              <div className={styles.loadingText}>Loading...</div>
            </div>
          ) : (
            responseAPI.slice(2).map(({ heroLink, heroName }) => (
              <div key={heroName}>
                <div className={styles.mapHexIcon}>
                  <img
                    className={styles.mapHexIconimg}
                    alt={heroName}
                    src={heroLink}
                  />
                </div>
                <a href={`/heroes/${heroName}`}>
                  <div className={styles.mapHexaBG}>
                    <span className={styles.mapHexaBGName}>{heroName}</span>
                  </div>
                </a>
                {/* <div>{heroName}</div> */}
              </div>
            ))
          )}
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
