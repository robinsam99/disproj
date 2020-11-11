import React from "react";
import Image from "react-bootstrap/Image";
import styles from "./home-page.module.scss";
import HeroSection from "./HeroSection";
import SecondFold from "./SecondFold";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <Image
        src="/HomePage/pattern.svg"
        height={100}
        className={styles.pattern}
      />
      <SecondFold />
    </div>
  );
};

export default HomePage;
