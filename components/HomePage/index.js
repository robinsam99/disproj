import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import styles from "./home-page.module.scss";
import HeroSection from "./HeroSection";
import SecondFold from "./SecondFold";

const HomePage = () => {
  const [isLoggedIn, setAuth] = useState(false);
  useEffect(() => {
    const fetchedName = window.localStorage.getItem("name");
    const fetchedEmail = window.localStorage.getItem("email");
    if (fetchedName && fetchedEmail) setAuth(true);
  }, []);
  return (
    <div className={styles.container}>
      <HeroSection isLoggedIn={isLoggedIn} />
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
