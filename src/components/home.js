import React, { PureComponent } from "react";
// import axios from "axios";
import styles from "../app.module.css";

class Home extends PureComponent {
  state = {
    homeTitle: this.props.title,
    weeklyData: [],
  };

  // componentDidMount() {
  //   axios
  //     .get("https://heroesofthestorm.com/en-us/", {
  //       headers: {
  //         withCredentials: true,
  //         // "Access-Control-Allow-Origin": false,
  //         // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       },
  //       responseType: "json",
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       // let getData = res.data
  //       //   .split("Intro")[1]
  //       //   .split("...")[0]
  //       //   .split("<p>")[1];
  //       // console.log(getData);
  //       // let axioJson = document.querySelector(".jsonAxios");
  //       // let axiosP = document.createElement("p");
  //       // axiosP.textContent = getData;
  //       // return axioJson === null ? null : axioJson.appendChild(axiosP);
  //       // let intro = res.data.querySelector(
  //       //   ".body > div > div.container > main > p:nth-child(2)"
  //       // );
  //       // console.log(intro);
  //     });
  //   // let url = "https://heroesofthestorm.com/en-us/";
  //   // let xhr = new XMLHttpRequest();
  //   // xhr.open("GET", url, true);
  //   // xhr.onreadystatechange = function (event) {
  //   //   console.log(xhr.readyState);
  //   //   if (xhr.readyState === 4) {
  //   //     switch (xhr.status) {
  //   //       case 200:
  //   //       case 304:
  //   //         console.log("OK or Not Modified (cached)", xhr.status);
  //   //         break;
  //   //       case 201:
  //   //         console.log("Created", xhr.status);
  //   //         break;
  //   //       case 403:
  //   //       case 401:
  //   //         console.log("Not Authorized or Forbidden", xhr.status);
  //   //         break;
  //   //       case 404:
  //   //         console.log("Not Found", xhr.status);
  //   //         break;
  //   //       case 500:
  //   //         console.log("Server Side Error", xhr.status);
  //   //         break;
  //   //       default:
  //   //         console.log("Some other code: ", xhr.status, xhr.status);
  //   //     }
  //   //   }
  //   // };
  //   // xhr.onerror = function (err) {
  //   //   console.warn(err);
  //   // };
  //   // xhr.send(null);
  //   // function myHTTPRequest() {
  //   //   http.createServer(function (request, response) {
  //   //     let querystring = url.parse(request.url, true).query;
  //   //     console.log(querystring);
  //   //   });
  //   // }
  //   // myHTTPRequest.listen(3000);
  //   // return myHTTPRequest;
  //   // axios.get("https://heroesofthestorm.com/en-us/").then((res) => {
  //   //   const weeklyData = res.data;
  //   //   this.setState({ weeklyData });
  //   // });
  //   // console.log(this.state.weeklyData);
  // }

  render() {
    return (
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div>future brawl random weekly</div>
          <h2>{this.state.homeTitle}</h2>
          <div className={styles.homeImg}></div>
          <div className={styles.thumbnailContainer}>
            <div className={styles.thumbnail1}></div>
            <div className={styles.thumbnail2}></div>
            <div className={styles.thumbnail3}></div>
          </div>
          <div className="jsonAxios">
            test:
            {this.state.weeklyData.map((weeklyHero) => {
              console.log(weeklyHero);
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

/* <div className={styles.mapHexCollage}>
{this.state.mapJson.map((compact, id) =>
  this.state.mapHexId === undefined ? null : (
    <div
      key={id}
      onClick={() => {
        {
          console.log(id);
        }
        this.setState({
          mapHexId: id,
          bottomDisplayUnit: "block",
        });
      }}
    >
      <div
        className={
          id !== this.state.mapHexId && this.state.mapHexId !== ""
            ? styles.mapHexUnitUnActive
            : null
        }
      >
        <div className={styles.mapHexIcon}>
          <img
            alt={compact.mName}
            src={`../../images/maps/${compact.mName}.jpg`}
          />
        </div>
        <div className={styles.mapHexaBG}>
          <span className={styles.mapHexaBGName}>
            {compact.mName}
          </span>
        </div>
      </div>
    </div>
  )
)}
</div> */
