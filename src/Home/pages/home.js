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
    const dayDate = d.getUTCDate();

    const dateHandler =
      dateToDay === 2
        ? setMonthDate(monthDate) ||
          setDayDate(d.getUTCDate()) ||
          monthDate + ", " + dayDate + " "
        : monthDate + ", " + dayDate + " ";
    setTextDate(dateHandler);
  }, []);

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
