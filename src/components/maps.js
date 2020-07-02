import React, { PureComponent } from "react";

import styles from "../app.module.css";
import * as mapData from "../data/jsonData/hotsMaps.json";

class Maps extends PureComponent {
  state = {
    mapJson: JSON.parse(JSON.stringify(mapData)).default,
  };

  // mapGenerator = () => {
  //   let mapG = Array.from(this.state.mapJson).forEach((compact, id) => {
  //     return (
  //       <div key={id}>
  //         <div>{compact.mName}</div>
  //       </div>
  //     );
  //   });
  //   return mapG;
  // };
  render() {
    return (
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <h2>{this.props.title}</h2>
          <div className={styles.mapHexUnit}>
            {this.state.mapJson.map((compact, id) => (
              <div key={id}>
                <div>{compact.mName}</div>
                <div className={styles.mapHexagonBG}>
                  <img
                    alt={compact.mName}
                    src={`../../images/maps/${compact.mName}.jpg`}
                  />
                </div>
                <div>{console.log(compact.mapObj.objectiveA.children)}</div>
                {/* <div className={styles.mapWiderImg}>
                  <img alt={compact.mName} src={`${compact.mapWider}`} />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Maps;
