import React from "react";
import Image from 'react-bootstrap/Image';
import styles from "./home-page.module.scss";
import HeroSection from "./HeroSection";
import SecondFold from './SecondFold';

import Header from '../Common/Header';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
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
