import React, { useState, useEffect } from "react";
import Router from "next/router";
import Image from 'react-bootstrap/Image';
import styles from "./feed.module.scss";
import { postObj } from "../HomePage/SecondFold/post-obj";
import ProfileCard from "./ProfileCard";
import StarredPosts from "./StarredPosts";
import PrimaryCTA from "../Common/PrimaryCTA";
import TipSection from './TipSection';
import InfiniteLoad from './InfiniteLoad';

const Feed = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userRolePresent, setUserRoleStatus] = useState(false);
  const [userRole, setUserRole] = useState('affected');

  useEffect(() => {
    const fetchedName = window.localStorage.getItem("name");
    const fetchedEmail = window.localStorage.getItem("email");
    const fetchedUserRole = window.localStorage.getItem("userRole");

    if (fetchedUserRole) {
      setRoleAcross(fetchedUserRole);
    }
    if (!fetchedEmail || !fetchedName) {
      Router.push("/login");
    }
    setName(fetchedName);
    setEmail(fetchedEmail);
  }, []);

  const setRoleAcross = (role) => {
    setUserRole(role);
    localStorage.setItem("userRole", role);
    setUserRoleStatus(true);
  }
  if (!userRolePresent) {
    return (
      <div className={styles.containerRole}>
        <span style={{ fontWeight: 'bold', fontSize: 26 }}>Help us filter the content we show you.</span>
        <span style={{ fontSize: 14 }}>You can skip and pick this later as well.</span>
        <div className={styles.options}>
          <a>
            <Image src="/Feed/covid-positive.svg" height="50" className={styles.image} onClick={() => setRoleAcross('positive')} />
            <span>Covid Positve</span>
          </a>
          <a>
            <Image src="/Feed/affected.svg" height="50" className={styles.image} onClick={() => setRoleAcross('affected')} />
            <span>Affected By Covid</span>
          </a>
          <a>
            <Image src="/Feed/doctor.svg" height="50" className={styles.image} onClick={() => setRoleAcross('doctor')} />
            <span>Doctor</span>
          </a>
        </div>
        <a style={{ marginTop: 10, padding: 20, cursor: 'pointer', textDecoration: 'underline', color: 'var(--cta)' }} onClick={() => setRoleAcross('affected')}>Skip For Now</a>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <ProfileCard name={name} userRole={userRole} setUserRoleStatus={setUserRoleStatus}/>
        <PrimaryCTA variant="cta" size="md" className={styles.cta}>
          Write a Post
        </PrimaryCTA>
        <TipSection />
      </div>
      <div className={styles.rightSection}>
        <StarredPosts postObj={postObj} />
        <InfiniteLoad />
      </div>
    </div>
  );
};
export default Feed;
