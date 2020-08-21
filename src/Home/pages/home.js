import React, { useState, useEffect } from "react";

import MainContainer from "../../Shared/components/mainContainer";
import styles from "./home.module.css";

const scraperapiClient = require("scraperapi-sdk")(
  "0cee0c963a5f7029df77efe22f18c3f6"
);

const Home = (props) => {
  const [textDate, setTextDate] = useState();
  const [monthDate, setMonthDate] = useState();
  const [dayDate, setDayDate] = useState();
  const [responseAPI, setResponseAPI] = useState();
  const bHTMLSPLIT = [];

  useEffect(() => {
    // need better month detector
    const d = new Date();
    const dateToDay = d.getDay();
    console.log(dateToDay);
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

    setMonthDate(month[dateToMonth]) && setDayDate(weekday[dateToDay]);

    const dateHandler =
      dateToDay === 2
        ? setMonthDate(month[dateToMonth]) &&
          setDayDate(d.getUTCDate()) &&
          monthDate + ", " + dayDate + " "
        : monthDate + ", " + dayDate + " ";
    setTextDate(dateHandler);
  }, [monthDate, dayDate]);

  // const fs = require("fs");

  const jsonResponse = async () => {
    const responseJson = await scraperapiClient.get(
      "https://heroesofthestorm.com/en-us/",
      {
        render: true,
      }
    );
    const bodyHTML = await JSON.stringify(responseJson).toString();
    const bodyHTMLSplit = await bodyHTML
      .split("<section")[6]
      .split(`<h2 class=\\"hero__title\\">`);
    for (let i = 1, j = 0; i < bodyHTMLSplit.length; i++, j++) {
      const splittedHero =
        bodyHTMLSplit[i].split("</h2>", 1)[0].length > 20
          ? ""
          : bodyHTMLSplit[i].split("</h2>", 1)[0];

      const splittedHeroLink =
        bodyHTMLSplit[j].split("src=\\", 2)[1] === undefined
          ? ""
          : bodyHTMLSplit[j]
              .split("src=\\", 2)[1]
              .split("alt=\\", 1)[0]
              .split('"')[1]
              .split("\\")[0];

      bHTMLSPLIT.push({
        heroName: splittedHero,
        heroLink: splittedHeroLink,
      });
      // fs.writeFile("rotation.json", JSON.stringify(bHTMLSPLIT), (err) => {
      //   if (err) throw err;
      // });
    }
    setResponseAPI(bHTMLSPLIT);
  };

  if (bHTMLSPLIT.length < 1) {
    jsonResponse();
  }

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
            responseAPI.slice(1).map((compact) => {
              return (
                <div key={compact.heroName}>
                  <div className={styles.mapHexIcon}>
                    <img
                      className={styles.mapHexIconimg}
                      alt={compact.heroName}
                      src={compact.heroLink}
                    />
                    {/* {console.log(compact.heroLink)} */}
                  </div>
                  <a href={`/heroes/${compact.heroName}`}>
                    <div className={styles.mapHexaBG}>
                      <span className={styles.mapHexaBGName}>
                        {compact.heroName}
                      </span>
                    </div>
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
