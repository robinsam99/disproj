import React, { useEffect, useState } from "react";
import Router from "next/router";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

import PrimaryCTA from "../Common/PrimaryCTA";
import styles from "./login-page.module.scss";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchedName = window.localStorage.getItem("name");
    const fetchedEmail = window.localStorage.getItem("email");
    if (fetchedName && fetchedEmail) {
      setName(fetchedName);
      setEmail(fetchedEmail);
    }
  }, []);
  const setCredentials = (name, email) => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  return (
    <div className={styles.container}>
      <Image
        src="/HomePage/pattern.svg"
        height={100}
        className={styles.pattern}
      />
      <div className={styles.card}>
        <Image
          src="/LoginPage/LoginTitle.svg"
          height={50}
          className={styles.title}
        />
        <Form>
          <Form.Control
            className={styles.control}
            type="text"
            placeholder={"Name"}
            value={name}
            onChange={(event) => {
              event.preventDefault();

              setName(event.target.value);
            }}
          />
          <Form.Control
            className={styles.control}
            type="text"
            placeholder={"Email"}
            value={email}
            onChange={(event) => {
              event.preventDefault();

              setEmail(event.target.value);
            }}
          />
        </Form>
      </div>
      <PrimaryCTA
        variant="cta"
        size="lg"
        className={styles.cta}
        onClick={(e) => {
          e.preventDefault();
          if (name === "" || email === "") {
          }
          setCredentials(name, email);
          Router.push("/feed");
        }}
      >
        Log In
      </PrimaryCTA>
    </div>
  );
};
export default LoginPage;
