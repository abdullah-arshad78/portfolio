import React from "react";
import { Link } from "react-router-dom";

const linkClasses =
  "move-up text-white font-extrabold text-3xl hover:text-cyan-100 hover:border-b-4 hover:border-b-cyan-100 py-1 transition-all duration-150 ease-in";

const MobileNavigation = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 left-0 h-screen transparent-black flex flex-col items-center justify-between pt-[9rem] pb-[6rem] z-30 ">
      <Link className={linkClasses} onClick={onClose} to="/">
        HOME
      </Link>
      <Link className={linkClasses} onClick={onClose} to="/about">
        ABOUT
      </Link>
      <Link className={linkClasses} onClick={onClose} to="/projects">
        PROJECTS
      </Link>
      <Link className={linkClasses} onClick={onClose} to="/posts">
        BLOGS
      </Link>
      <Link className={linkClasses} onClick={onClose} to="/contact">
        CONTACT
      </Link>
    </div>
  );
};

export default MobileNavigation;
