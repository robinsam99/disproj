import React from "react";
import styles from "./covid-tag.module.scss";

const CovidTag = ({ covid }) => {
  return (
    <div className={covid ? styles.containerPositive : styles.container}>
      <span style={{marginLeft: 10}}>
        {covid ? <span>Got Symptoms</span> : <span>Got Diagnosed</span>}
      </span>
    </div>
  );
};
export default CovidTag;
