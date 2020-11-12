import React from "react";
import Image from "react-bootstrap/Image";

import styles from "./post.module.scss";
import Tags from "../../../Common/Tags";

const Post = ({ data }) => {
  return (
    <div className={styles.container}>
      <div
        className={
          data.type === "doctor" ? styles.headerPrimary : styles.headerSecondary
        }
      >
        <Image src="/HomePage/profile.svg" height="60" />
        <div className={styles.postDetails}>
          <div className={styles.firstRow}>
            <span style={{ fontSize: 16, fontWeight: "bold" }}>
              {data.name}
            </span>

            {data.type !== "doctor" ? (
              <div style={{ marginLeft: 10 }}>
                <Tags type={data.type} size="sm" />
              </div>
            ) : (
              <></>
            )}
          </div>

          <span style={{ fontSize: 14 }}>{data.field || data.bio}</span>
          <span style={{ fontSize: 12 }}>{data.work}</span>
        </div>
      </div>
      <div className={styles.post}>{data.post}</div>
    </div>
  );
};
export default Post;
