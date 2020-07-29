import React from "react";

import styles from "./infoDisplay.module.css";

const InfoDisplaySkill = (props) => {
  const { headVal, value, img } = props;

  const skillHandler = () => {
    if (headVal && value && img) {
      return (
        <React.Fragment key={headVal}>
          <div className={styles.displayInfoChildSkill}>
            <div>
              <div className={styles.displayInfoChildSkillTitle}>{headVal}</div>
              <img className={styles.displayInfoChildSkillImg} src={img} />
            </div>
            <div className={styles.displayInfoChildSkillVal}>{value}</div>
          </div>
        </React.Fragment>
      );
    }
  };

  //   const skillTitleHandler = () => {
  //     if (typeof headVal === "string" && value === null && img === null) {
  //       return (
  //         <React.Fragment>
  //           {console.log(headVal, value, img)}
  //           <div className={styles.displayInfoChildSkillTitle}>{headVal}</div>
  //         </React.Fragment>
  //       );
  //     }
  //   };

  console.log(typeof headVal === "string" ? "its a string" : "nope");

  return (
    <div className={styles.displayInfoHeroSkill}>
      {/* <div>{skillTitleHandler()}</div> */}
      <div>{skillHandler()}</div>
    </div>
  );
};

export default InfoDisplaySkill;
