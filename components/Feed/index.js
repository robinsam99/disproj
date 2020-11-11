import React, { useState, useEffect } from "react";
import Router from "next/router";
import styles from "./feed.module.scss";

const Feed = () => {
  useEffect(() => {
    const fetchedName = window.localStorage.getItem("name");
    const fetchedEmail = window.localStorage.getItem("email");
    console.log(fetchedName, fetchedEmail);
    if (!fetchedEmail || !fetchedName) {
      Router.push('/login');
    }
  }, []);
  return <></>;
};
export default Feed;
