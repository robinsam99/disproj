import React from "react";
import Router from "next/router";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import styles from "./hero-section.module.scss";
import PrimaryCTA from "../../Common/PrimaryCTA";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <span>Some Random Empathetic Text is placed here and here.</span>
        <PrimaryCTA
          variant="cta"
          size="lg"
          className={styles.cta}
          onClick={() => Router.push("/login")}
        >
          Join Now
        </PrimaryCTA>
      </div>
      <div className={styles.imageSection}>
        <Image src="/HomePage/hero-illustration.svg" className={styles.image} />
      </div>
    </div>
  );
};
export default HeroSection;
