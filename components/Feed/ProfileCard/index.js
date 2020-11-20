import React, { useState } from "react";
import Image from "react-bootstrap/Image";

import Tags from "../../Common/Tags";

import styles from "./profile-card.module.scss";

const ProfileCard = ({ name, userRole, setUserRoleStatus }) => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
        <Image src="/HomePage/profile.svg" height="60" />
        <span className={styles.name}>{name}</span>
        <div
          style={{
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
            cursor: 'pointer'
          }}
          onClick={() => setUserRoleStatus(false)}
        >
          <Tags type={userRole} />
        </div>
        <span className={styles.details}>Related To Covid Patient</span>
        <span className={styles.details}>Duration</span>
      </div>
      <a className={styles.link}>Saved Posts</a>
    </div>
  );
};
export default ProfileCard;
