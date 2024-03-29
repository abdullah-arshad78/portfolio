import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../sanityClient";

import useDarkMode from "../hooks/useDarkMode";
import Loader from "../UI/Loader";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState(null);

  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    window.scrollTo(0, 0);

    sanityClient
      .fetch(
        `*[ _type=="post" ]{
      title,
      slug,
      mainImage{
        asset-> {url},
      }
    }`
      )
      .then((data) => setBlogPosts(data))
      .catch(console.error);
  }, []);
  const blogContent = blogPosts
    ? blogPosts.map((post) => (
        <Link
          to={`${post.slug.current}`}
          key={post.slug.current}
          className={`relative border-l-4 border-green-400 blog-container rounded shadow md:shadow-lg move-up ${
            isDarkMode && "drop-shadow-dark"
          }`}
        >
          <img src={post.mainImage.asset.url} alt={post.slug.current} />
          <h2 className="absolute bottom-[.5rem] left-[50%] center-left w-[max-content] py-2 px-3 bg-slate-700 text-white opacity-90 rounded-lg secondary-heading md:text-2xl lg:text-3xl z-10">
            {post.title}
          </h2>
        </Link>
      ))
    : "";
  return (
    <div
      className={`px-6 pt-[9rem] pb-[6rem]  ${
        isDarkMode ? "dark-mode-bg" : "about-background"
      } simple-text text-slate-600 text-xl  min-h-[98vh] relative ${
        !blogPosts && "flex items-center justify-center flex-col"
      }`}
    >
      <h1
        className={`secondary-heading text-5xl text-center mb-6 md:mb-[3rem]  move-up ${
          isDarkMode ? "text-white" : "text-zinc-600"
        }`}
      >
        My Blogs
      </h1>
      {!blogPosts && <Loader />}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md-gap-6 xl:gap-8">
        {blogPosts && blogContent}
      </div>
    </div>
  );
};

export default Blogs;
