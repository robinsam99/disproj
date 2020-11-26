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
        <Image src="/HomePage/covid-patients.svg" className={styles.image} />
      </div>
      <div className={styles.textSection}>
        <span style={{ fontWeight: "bold", fontSize: 44 }} className={styles.title}>Our Mission.</span>
        <span style={{ fontSize: 22 }} className={styles.subHeader}>
          We want patients to be able to do basic diagnosis from home during a pandemic where venturing out and meeting a doctor is restricted.We are trying build a community of patients by sharing their experiences!
        </span>
      </div>
    </div>
  );
};
export default ThirdFold;
