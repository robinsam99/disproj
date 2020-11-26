import React from "react";
import styles from "./tags.module.scss";

const Tags = ({ type, size }) => {
  if (type === "affected") {
    return (
      <div className={size === "sm" ? styles.affectedSmall : styles.affected}>
       Got Diagnosed
      </div>
    );
  } else if (type === "positive") {
    return (
      <div className={size === "sm" ? styles.positiveSmall : styles.positive}>
      Got Symptoms
      </div>
    );
  } else if (type === "doctor") {
    return (
      <div className={size === "sm" ? styles.doctorSmall : styles.doctor}>
        Doctor
      </div>
    );
  } else return <></>;
};
export default Tags;
