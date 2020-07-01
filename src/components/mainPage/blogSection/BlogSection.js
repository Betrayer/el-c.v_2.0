import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import posts from "../../../postsRus.json";
import css from "./blogSection.module.css";

const BlogSection = () => {

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(999999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <section id="blog" className={css.blogSection}>
      <h2 className={css.blogHeader}>Наш блог</h2>
      <ul className={css.postsList}>
        <AwesomeSlider>
          {posts.slice(0, 3).map((post) => (
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
              <div className={css.textWrapper}>
              {post.message.map((text) => (
                <p key={getRandomIntInclusive()} className={css.postText}>{text}</p>
              ))}</div>
            </li>
          ))}
        </AwesomeSlider>
      </ul>
    </section>
  );
};

export default BlogSection;
