import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import styles from "./home-page.module.scss";
import HeroSection from "./HeroSection";
import SecondFold from "./SecondFold";
import ThirdFold from "./ThirdFold";
import FourthFold from "./FourthFold";

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Image
          src="/HomePage/pattern.svg"
          height={100}
          style={{ marginRight: 40, marginBottom: -110, marginTop: 30 }}
        />
      </div>

      <ThirdFold />
      <FourthFold />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end", 
          fontWeight: "bold",
          padding: 20,
        }}
      >
        <span style={{ fontSize: 14 }}>
          Made with{" "}
          <Image
            src="/HomePage/heart.svg"
            height="20"
            style={{ marginLeft: 2, marginRight: 5 }}
          />
          by covimeet.
        </span>
      </div>
    </div>
  );
};

export default HomePage;
