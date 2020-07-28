import React, { PureComponent } from "react";

import mapData from "../../data/jsonData/hotsMaps.json";
import MainContainer from "../../Shared/components/mainContainer";

// import styles from "../app.module.css";
import styles from "./maps.module.css";

class Maps extends PureComponent {
  state = {
    mapJson: JSON.parse(JSON.stringify(mapData)),
    mapHexId: "",
    bottomDisplayUnit: "",
    mapselectid: "",
  };

  async mapScroll() {
    await document.querySelector("#mapScroll");
    return document.querySelector("#mapScroll").scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  mapselect() {
    this.setState({
      mapselectid: this.props.mapselectid,
    });
    console.log(this.state.mapselectid);
  }

  mapInfoGenerator = () => {
    return this.state.mapHexId === "" ? null : (
      <div className={styles.mapBottomContainer}>
        <div className={styles.mapInfo}>
          <h1>{this.state.mapJson[this.state.mapHexId].mName}</h1>
          <div className={styles.mapWider}>
            <a
              rel="prefetch"
              href={this.state.mapJson[this.state.mapHexId].mapWider}
            >
              <img
                alt={`mini ${this.state.mapJson[this.state.mapHexId].mName}`}
                src={this.state.mapJson[this.state.mapHexId].mapWider}
              />
            </a>
          </div>
        </div>
        <div className={styles.objTitle}>
          <h2>Map Objectives</h2>
        </div>
        <div className={styles.mapObj}>
          <div className={styles.mapObjMain}>
            <div className={styles.mapObjMainInfo}>
              <h5>
                {
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveA
                    .objName
                }
              </h5>
              <p>
                {
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveA
                    .objDescription
                }
              </p>
            </div>
            <div className={styles.mapObjMainImg}>
              <img
                alt={
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveA
                    .objName
                }
                src={
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveA
                    .objImg
                }
              />
            </div>
          </div>
          <div className={styles.mapObjMain}>
            <div className={styles.mapObjMainInfo}>
              <h5>
                {
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveB
                    .objName
                }
              </h5>
              <p>
                {
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveB
                    .objDescription
                }
              </p>
            </div>
            <div className={styles.mapObjMainImg}>
              <img
                alt={
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveB
                    .objName
                }
                src={
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveB
                    .objImg
                }
              />
            </div>
          </div>
          <div className={styles.mapObjMain}>
            <div className={styles.mapObjMainInfo}>
              <h5>
                {
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveC
                    .objName
                }
              </h5>
              <p>
                {
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveC
                    .objDescription
                }
              </p>
            </div>
            <div className={styles.mapObjMainImg}>
              <img
                alt={
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveC
                    .objName
                }
                src={
                  this.state.mapJson[this.state.mapHexId].mapObj.objectiveC
                    .objImg
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <MainContainer>
        <div className={styles.mapContainer}>
          <h2>{this.props.title}</h2>
          <div className={styles.mapHexCollage}>
            {this.state.mapJson.map((compact, id) =>
              this.state.mapHexId === undefined ? null : (
                <div
                  key={id}
                  onClick={() => {
                    this.setState({
                      mapHexId: id,
                      bottomDisplayUnit: "block",
                    });
                    this.mapScroll();
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
          </div>
          <div
            id="mapScroll"
            className={styles.bottomMapInfo}
            style={{ display: this.state.bottomDisplayUnit }}
          >
            {this.mapInfoGenerator()}
            {this.mapselect()}
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default Maps;
