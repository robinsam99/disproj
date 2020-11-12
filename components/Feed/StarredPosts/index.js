import React from "react";
import styles from "./starred-posts.module.scss";

import PostCard from "../../HomePage/SecondFold/PostCard";

const StarredPosts = ({ postObj }) => {
  return (
    <div className={styles.container}>
      {postObj.map((post, index) => {
        return <PostCard post={post} key={index} />;
      })}
    </div>
  );
};
export default StarredPosts;
