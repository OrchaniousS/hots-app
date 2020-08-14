import React, { useState, useEffect } from "react";

import MainContainer from "../../Shared/components/mainContainer";
import styles from "./home.module.css";

const Home = (props) => {
  const [weeklyAPI, setWeeklyAPI] = useState([]);
  const [textDate, setTextDate] = useState();
  const [monthDate, setMonthDate] = useState();
  const [dayDate, setDayDate] = useState();

  // const { express } = require("express");
  // const request = require("request");
  // const app = express();

  useEffect(() => {
    const d = new Date();
    const dateToDay = d.getDay();
    const dateToMonth = d.getMonth();
    const month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    const weekday = [];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const monthDate = month[dateToMonth];

    // console.log(dateToDay);
    const dateHandler =
      dateToDay === 2
        ? setMonthDate(monthDate) &&
          setDayDate(d.getUTCDate()) &&
          monthDate + ", " + dayDate + " "
        : monthDate + ", " + dayDate + " ";
    setTextDate(dateHandler);
    // console.log(dateHandler);

    const options = {
      url: "https://hots-web-api.web.app/weekly",
      headers: {
        "User-Agent": "request",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, OPTIONS",
      },
    };

    // app.get(options.url, (req, res) => {
    fetch(options, (error, response, body) => {
      console.error("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log(body);
      setWeeklyAPI(JSON.parse(body));
    });
    // });
  }, []);

  const weeklyHandler = weeklyAPI.map(({ heroName }) => {
    const nameFixer = heroName === "Kel'Thuzad" ? "kelthuzad" : heroName;
    return (
      <div key={heroName}>
        <div className={styles.mapHexIcon}>
          <img
            className={styles.mapHexIconimg}
            alt={heroName}
            src={`https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/${nameFixer.toLowerCase()}/circleIcon.png`}
          />
        </div>
        <a href={`/heroes/${nameFixer}`}>
          <div className={styles.mapHexaBG}>
            <span className={styles.mapHexaBGName}>{heroName}</span>
          </div>
        </a>
      </div>
    );
  });

  const weeklyDivHandler = () => {
    if (!weeklyAPI) {
      console.log("api is on");
      console.log(typeof weeklyAPI);
      return <>{weeklyHandler}</>;
    } else {
      console.log("api is off");
      return (
        <div className={styles.centered}>
          <div className={styles.spinnerLoading}></div>
          <div className={styles.loadingText}>Loading...</div>
        </div>
      );
    }
  };

  return (
    <MainContainer>
      <h2>{`Weekly Rotation - [${textDate}]`}</h2>
      <div className={styles.mapContainer}>
        <div className={styles.mapHexCollage}>{weeklyDivHandler()}</div>
      </div>
    </MainContainer>
  );
};

export default Home;
