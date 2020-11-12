import React, { useState, useEffect } from "react";
import Router from "next/router";
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

  useEffect(() => {
    const fetchedName = window.localStorage.getItem("name");
    const fetchedEmail = window.localStorage.getItem("email");

    if (!fetchedEmail || !fetchedName) {
      Router.push("/login");
    }
    setName(fetchedName);
    setEmail(fetchedEmail);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <ProfileCard name={name} />
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
