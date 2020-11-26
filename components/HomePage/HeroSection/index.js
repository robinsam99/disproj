import React from "react";
import Router from "next/router";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import styles from "./hero-section.module.scss";
import PrimaryCTA from "../../Common/PrimaryCTA";

const HeroSection = ({ isLoggedIn }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <span>Let Us Help You,<br /> 
          Diagnose  your disease & you don't have to venture out!</span>
        <PrimaryCTA
          variant="cta"
          size="lg"
          className={styles.cta}
          onClick={() =>
            isLoggedIn ? Router.push("/feed") : Router.push("/login")
          }
        >
          {isLoggedIn ? <>Browse Feed</> : <>Diagnose</>}
        </PrimaryCTA>
      </div>
      <div className={styles.imageSection}>
        <Image src="/HomePage/hero-illustration.svg" className={styles.image} />
      </div>
    </div>
  );
};
export default HeroSection;
