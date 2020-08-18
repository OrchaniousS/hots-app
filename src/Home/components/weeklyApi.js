// const [weeklyAPI, setWeeklyAPI] = useState([]);
// const fs = require("fs");

// const { express } = require("express");
// const request = require("request");
// const app = express();
// const weeklyHandler = weeklyAPI.map(({ heroName }) => {
//   const nameFixer = heroName === "Kel'Thuzad" ? "kelthuzad" : heroName;
//   return (
//     <div key={heroName}>
//       <div className={styles.mapHexIcon}>
//         <img
//           className={styles.mapHexIconimg}
//           alt={heroName}
//           src={`https://static.heroesofthestorm.com/gd/dfe093731311b059970f9ce266743072/heroes/${nameFixer.toLowerCase()}/circleIcon.png`}
//         />
//       </div>
//       <a href={`/heroes/${nameFixer}`}>
//         <div className={styles.mapHexaBG}>
//           <span className={styles.mapHexaBGName}>{heroName}</span>
//         </div>
//       </a>
//     </div>
//   );
// });

// const weeklyDivHandler = () => {
//   if (!weeklyAPI) {
//     console.log("api is on");
//     console.log(typeof weeklyAPI);
//     return <>{weeklyHandler}</>;
//   } else {
//     console.log("api is off");
//     return (
//       <div className={styles.centered}>
//         <div className={styles.spinnerLoading}></div>
//         <div className={styles.loadingText}>Loading...</div>
//       </div>
//     );
//   }
// };

// const options = {
//   url: "https://hots-web-api.web.app/weekly",
//   headers: {
//     "User-Agent": "request",
//     "Access-Control-Allow-Headers":
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization",
//     "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, OPTIONS",
//   },
// };

// app.get(options.url, (req, res) => {
// fetch(options, (error, response, body) => {
//   console.error("error:", error);
//   console.log("statusCode:", response && response.statusCode);
//   console.log(body);
//   setWeeklyAPI(JSON.parse(body));
// });
// });
