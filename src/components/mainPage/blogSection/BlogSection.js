import React, { useState, useEffect } from "react";
import { navLink, NavLink } from "react-router-dom";
import posts from "../../../postsRus.json";
import css from "./blogSection.module.css";

const BlogSection = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [totalPosts, setTotalPosts] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  useEffect(() => {
    fetchMoreListItems();
  }, []);

  function handleScroll() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 300) setIsFetching(true);
  }

  function fetchMoreListItems() {
    const preloader = 5 + Number(totalPosts.length);
    setTotalPosts(posts.filter((item, index) => index <= preloader));
    setIsFetching(false);
  }

  return (
    <section className={css.blogSection}>
      <h2 className={css.blogHeader}>Наш блог</h2>
      <ul className={css.postsList}>
        {totalPosts.slice(0, 2).map((post) => (
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
      </ul>
    </section>
  );
};

export default BlogSection;
