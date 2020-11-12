import React from "react";
import styles from "./infinite-load.module.scss";

import { posts } from "./posts";
import Post from './Post';

const InfinteLoad = () => {
  return (
    <div className={styles.container}>
      {posts.map((obj, index) => {
        return <Post data={obj} key={index} />;
      })}
    </div>
  );
};
export default InfinteLoad;
