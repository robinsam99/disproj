import React from "react";
import styles from "./covid-tag.module.scss";

const CovidTag = ({ covid }) => {
  return (
    <div className={covid ? styles.containerPositive : styles.container}>
      <span style={{marginLeft: 10}}>
        {covid ? <span>Covid Positive</span> : <span>Affected By Covid</span>}
      </span>
    </div>
  );
};
export default CovidTag;
