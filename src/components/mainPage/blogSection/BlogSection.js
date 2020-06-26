import React, { useState, useEffect } from "react";
import { navLink, NavLink } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import posts from "../../../postsRus.json";
import css from "./blogSection.module.css";

const BlogSection = () => {
  const [totalPosts, setTotalPosts] = useState([]);

  return (
    <section className={css.blogSection}>
      <h2 className={css.blogHeader}>Наш блог</h2>
      <ul className={css.postsList}>
        <AwesomeSlider>
          {totalPosts.slice(0, 3).map((post) => (
            <li key={post.id} className={css.postsListItem}>
              {post.img ? (
                <img
                  className={css.postImg}
                  height="auto"
                  alt="post_image"
                  src={require(`../../../assets/blog/${post.img}.jpeg`)}
                />
              ) : (
                <></>
              )}
              {post.message.map((text) => (
                <p className={css.postText}>{text}</p>
              ))}
            </li>
          ))}
        </AwesomeSlider>
      </ul>
    </section>
  );
};

export default BlogSection;
