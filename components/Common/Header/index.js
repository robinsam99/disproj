import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import styles from "./header.module.scss";

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchedName = window.localStorage.getItem("name");
    const fetchedEmail = window.localStorage.getItem("email");
    if (fetchedName && fetchedEmail) {
      setName(fetchedName);
      setEmail(fetchedEmail);
    }
  });
  return (
    <div className={styles.container}>
      <a href="/">
        <Image src="/HomePage/Logo.svg" className={styles.logo} />
      </a>
      <div className={styles.rightSection}>
        <a href="/" className={styles.profile}>
          {name}
        </a>
      </div>
    </div>
  );
};
export default Header;
