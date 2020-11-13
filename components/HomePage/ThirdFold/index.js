import React from "react";
import Router from "next/router";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import styles from "./third-fold.module.scss";
import PrimaryCTA from "../../Common/PrimaryCTA";

const ThirdFold = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image src="/HomePage/covid-patients.svg" className={styles.image}/>
      </div>
      <div className={styles.textSection}>
        <span style={{ fontWeight: "bold", fontSize: 44 }} className={styles.title}>Our Mission.</span>
        <span style={{fontSize: 22}} className={styles.subHeader}>
          We want to bring covid affected people together and get them the help
          they require. Help validate the information they have on covid and
          beat this together.
        </span>
      </div>
    </div>
  );
};
export default ThirdFold;
