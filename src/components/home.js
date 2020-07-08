import React from "react";

import styles from "../app.module.css";

const Home = (props) => {
  return (
    <div>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div>
            future brawl random weekly
            <div className="jsonAxios">
              test:
              {/* {dogs.message} <br />
              {<img src={dogs.message} alt={dogs.message} />} */}
            </div>
          </div>
          <h2>{props.title}</h2>
          <div>
            <div className={styles.mapHexCollage}>
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
            </div>{" "}
          </div>
          {/* <div className={styles.homeImg}></div>
          <div className={styles.thumbnailContainer}>
            <div className={styles.thumbnail1}></div>
            <div className={styles.thumbnail2}></div>
            <div className={styles.thumbnail3}></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
