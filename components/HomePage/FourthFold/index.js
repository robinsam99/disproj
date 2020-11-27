import React from "react";
import Image from "react-bootstrap/Image";

import styles from "./fourth-fold.module.scss";

const profiles = [
  {
    name: "Robin Sam",
    position: "CTO",
    profile: "/HomePage/robin.png",
    description:
      "Always ready to serve people and loves leading people.",
  },
  {
    name: "Devesh Guar",
    position: "CTO",
    profile: "/HomePage/devesh.png",
    description:
      "Aspring business man, has a great love for the country and army.",
  },
  {
    name: "Nimrah Fathima",
    position: "CFO",
    profile: "/HomePage/nimrah.png",
    description: "Loves writing and creating connections around her",
  },
  {
    name: "Vineet Bedre",
    position: "CFO",
    profile: "/HomePage/vineet.png",
    description: "Very outgoing and deligent person",
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
          <Image src="/HomePage/home_plot1.png" className={styles.imageStory} />
          <Image src="/HomePage/home_plot2.png" className={styles.imageStory} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }} className={styles.story}>
          <Image src="/HomePage/home_plot3.png" className={styles.imageStory} />
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
