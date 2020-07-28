import React, { useState } from "react";

import MainContainer from "../../Shared/components/mainContainer";
import weeklyRotation from "../data/weeklyR.json";
import styles from "./home.module.css";
// import getWeeklyHeroes from "../../services/weeklyR";

let text = "Weekly Rotation - [July 7th]";

const Home = (props) => {
  // const axios = require("./node_modules/axios");
  // const cheerio = require("cheerio");

  // const [rotation, setRotation] = useState([]);

  // axios
  //   .get("https://arstechnica.com/", {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers": "Content-Type, Authorization",
  //     },
  //   })
  //   .then((urlResponse) => {
  //     const $ = cheerio.load(urlResponse.data);

  //     $("div.hero").each((i, element) => {
  //       const img = $(element).find("a.hero__link").attr("href");
  //       setRotation.concat(img);
  //       console.log(img);
  //     });
  //   });

  const [weekly, setWeekly] = useState(weeklyRotation);
  // console.log(weekly);
  //     const [date, setDate] = useState("Joke is loading");
  // const [joke, setJoke] = useState("Joke is loading...");

  // const getJoke = () => {
  //   getWeeklyHeroes().then((joke) => setJoke(joke));
  // };

  // useEffect(getJoke, []);

  return (
    <MainContainer>
      <h2>{text}</h2>
      {/* <div>{joke}</div>
      <div>{rotation}</div> */}
      <div className={styles.mapContainer}>
        <div className={styles.mapHexCollage}>
          {weekly.map(({ heroName, heroIcon }) => (
            <div key={heroName}>
              <div className={styles.mapHexIcon}>
                <img
                  className={styles.mapHexIconimg}
                  alt={heroName}
                  src={heroIcon}
                />
              </div>
              <a href={`/heroes/${heroName}`}>
                <div className={styles.mapHexaBG}>
                  <span className={styles.mapHexaBGName}>{heroName}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
