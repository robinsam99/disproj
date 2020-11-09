import React from "react";
import styles from "./second-fold.module.scss";
import PostCard from "./PostCard";

const postObj = [
  {
    name: "John Doe",
    covid: true,
    post:
      "Lorem ipsum dolor sit amet, elin consectetur adipiscing elit. sakb Phasellus justo velit, volutpat ds vitae orci et, dictum commodo jb orci. Proin in dui ex. Nullam nec erat fermentum, placerat diam sit amet, molestie dolor. ",
    profile: "/HomePage/profile.svg",
  },
  {
    name: "Jane Doe",
    covid: false,
    post:
      "Lorem ipsum dolor sit amet, elin consectetur adipiscing elit. sakb Phasellus justo velit, volutpat ds vitae orci et, dictum commodo jb orci. Proin in dui ex. Nullam nec erat fermentum, placerat diam sit amet, molestie dolor. ",
    profile: "/HomePage/profile.svg",
  },
  {
    name: "John Doe",
    covid: true,
    post:
      "Lorem ipsum dolor sit amet, elin consectetur adipiscing elit. sakb Phasellus justo velit, volutpat ds vitae orci et, dictum commodo jb orci. Proin in dui ex. Nullam nec erat fermentum, placerat diam sit amet, molestie dolor. ",
    profile: "/HomePage/profile.svg",
  },
  {
    name: "John Doe",
    covid: false,
    post:
      "Lorem ipsum dolor sit amet, elin consectetur adipiscing elit. sakb Phasellus justo velit, volutpat ds vitae orci et, dictum commodo jb orci. Proin in dui ex. Nullam nec erat fermentum, placerat diam sit amet, molestie dolor. ",
    profile: "/HomePage/profile.svg",
  },
  {
    name: "John Doe",
    covid: false,
    post:
      "Lorem ipsum dolor sit amet, elin consectetur adipiscing elit. sakb Phasellus justo velit, volutpat ds vitae orci et, dictum commodo jb orci. Proin in dui ex. Nullam nec erat fermentum, placerat diam sit amet, molestie dolor. ",
    profile: "/HomePage/profile.svg",
  },
];

const SecondFold = () => {
  return (
    <div className={styles.container}>
      {postObj.map((post, index) => {
        return (
          <div key={index}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};
export default SecondFold;
