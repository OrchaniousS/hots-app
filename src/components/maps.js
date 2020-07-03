import React, { PureComponent } from "react";

import styles from "../app.module.css";
import * as mapData from "../data/jsonData/hotsMaps.json";

class Maps extends PureComponent {
  state = {
    mapJson: JSON.parse(JSON.stringify(mapData)).default,
    mapHexId: "",
  };

  mapInfoGenerator = () => {
    return (
      <div>
        {this.state.mapHexId === "" ? null : (
          <div>
            <div>{this.state.mapJson[this.state.mapHexId].mName}</div>
            <div className={styles.mapObjMain}>
              Objective Name:
              {
                this.state.mapJson[this.state.mapHexId].mapObj.objectiveA
                  .objName
              }
              Objective Description:
              {
                this.state.mapJson[this.state.mapHexId].mapObj.objectiveA
                  .objDescription
              }
              Objective Image:
              {this.state.mapJson[this.state.mapHexId].mapObj.objectiveA.objImg}
            </div>
            <div className={styles.mapObjMain}>
              Objective Name:
              {
                this.state.mapJson[this.state.mapHexId].mapObj.objectiveB
                  .objName
              }
              Objective Description:
              {
                this.state.mapJson[this.state.mapHexId].mapObj.objectiveB
                  .objDescription
              }
              Objective Image:
              {this.state.mapJson[this.state.mapHexId].mapObj.objectiveB.objImg}
            </div>{" "}
            <div className={styles.mapObjMain}>
              Objective Name:
              {
                this.state.mapJson[this.state.mapHexId].mapObj.objectiveC
                  .objName
              }
              Objective Description:
              {
                this.state.mapJson[this.state.mapHexId].mapObj.objectiveC
                  .objDescription
              }
              Objective Image:
              {this.state.mapJson[this.state.mapHexId].mapObj.objectiveC.objImg}
            </div>
            <div className={styles.mapWider}>
              <img
                alt={`mini ${this.state.mapJson[this.state.mapHexId].mName}`}
                src={this.state.mapJson[this.state.mapHexId].mapWider}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  render() {
    return (
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <h2>{this.props.title}</h2>
          <div className={styles.mapHexUnit}>
            {this.state.mapJson.map((compact, id) =>
              this.state.mapHexId === undefined ? null : (
                <div
                  key={id}
                  onClick={() => {
                    this.setState({
                      mapHexId: id,
                    });
                  }}
                >
                  <img
                    className={styles.mapHexIcon}
                    alt={compact.mName}
                    src={`../../images/maps/${compact.mName}.jpg`}
                  />
                  <div className={styles.mapHexaBG}></div>
                </div>
              )
            )}
          </div>
          <div className={styles.bottomMapInfo}>{this.mapInfoGenerator()}</div>
        </div>
      </div>
    );
  }
}

export default Maps;
