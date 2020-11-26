import React from "react";
import Image from "react-bootstrap/Image";

import styles from "./fourth-fold.module.scss";

const profiles = [
  {
    name: "Dhruv Srikanth",
    position: "Co-founder and CEO",
    profile: "/HomePage/dhruv.svg",
    description:
      "When he's not building ML models you can find him gaming in a corner.",
  },
  {
    name: "Pranav Jagdish",
    position: "Co-founder and Product",
    profile: "/HomePage/pranav.svg",
    description:
      "Aspring business man, great writer and a pain in everyone's bottom.",
  },
  {
    name: "Shobith Nandakumar",
    position: "Co-founder and CTO",
    profile: "/HomePage/shobith.svg",
    description: "Loves cloud technology, javascript and animals.",
  },
];
const FourthFold = () => {
  return (
    <div className={styles.container}>
      <span className={styles.header}>Story Board</span>
      <span className={styles.subHeader}>
        Visual Representation of our customer lifecycle.
      </span>
      <Image
        src="/HomePage/pattern.svg"
        height={100}
        style={{ marginLeft: -900, marginTop: -100 }}
        className={styles.pattern}
      />
      <div className={styles.storySection}>
        <div style={{ display: "flex", flexDirection: "row" }} className={styles.story}>
          <Image src="/HomePage/plot1.svg" className={styles.imageStory} />
          <Image src="/HomePage/plot2.svg" className={styles.imageStory} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }} className={styles.story}>
          <Image src="/HomePage/plot3.svg" className={styles.imageStory} />
          <Image src="/HomePage/plot4.svg" className={styles.imageStory} />
        </div>
      </div>
      {/* <Image
        src="/HomePage/pattern.svg"
        height={100}
        style={{ marginRight: -900, marginBottom: -80, marginTop: 30 }}
        className={styles.pattern}
      />
      <span className={styles.header}>Design Process</span>
      <span className={styles.subHeader}>
        An in-depth profile on the users of Covimeet.
      </span>
      <Image
        src="/HomePage/covid-positive-empathy.svg"
        className={styles.image}
      />
      <Image
        src="/HomePage/covid-affected-empathy.svg"
        className={styles.image}
      />
      <Image src="/HomePage/doctor-empathy.svg" className={styles.image} />
      <Image
        src="/HomePage/wireframe-chart.svg"
        className={styles.imageChart}
      /> */}
      <span className={styles.header} style={{ marginTop: 40 }}>
        Meet our Team
      </span>
      <span className={styles.subHeader}>
        Who are we, what is interesting and catchy about us.
      </span>
      <div className={styles.profile}>
        {profiles.map((prof, index) => {
          return (
            <div className={styles.box} key={index}>
              <Image src={prof.profile} height={60} />
              <span
                style={{
                  fontSize: 14,
                  marginTop: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {prof.name}
              </span>
              <span
                style={{
                  fontSize: 12,
                  marginBottom: 15,
                  textAlign: "center",
                  color: "#8E8E8E",
                }}
              >
                {prof.position}
              </span>
              <span style={{ fontSize: 14 }}>{prof.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FourthFold;
