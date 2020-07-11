import React, { PureComponent } from "react";

import styles from "../app.module.css";
import * as weeklyData from "../data/jsonData/weeklyR.json";

class Home extends PureComponent {
  state = {
    weekHero: weeklyData.default,
  };

  render() {
    return (
      <div>
        <div className={styles.mainContent}>
          <div className={styles.container}>
            <div>
              <h2>{this.props.title} - [July 7th]</h2>
              <div className={styles.mapContainer}>
                <div className={styles.mapHexCollage}>
                  {this.state.weekHero.map((compact, id) => (
                    <div key={id}>
                      <div className={styles.mapHexIcon}>
                        <img
                          className={styles.mapHexIconimg}
                          alt={compact.heroName}
                          src={compact.heroIcon}
                        />
                      </div>
                      <a href={`/heroes/${compact.heroName}`}>
                        <div className={styles.mapHexaBG}>
                          <span className={styles.mapHexaBGName}>
                            {compact.heroName}
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
