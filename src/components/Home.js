import React from "react";
import abdullahPic from "../assets/abdullah.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-[9rem] pb-[8rem] bg-gradient-to-r from-lime-100  to-cyan-100">
      <div className="w-[15rem] md:w-[22rem] md:mr-6 rounded-full move-up">
        <img
          className="w-full h-auto rounded-full shadow-lg"
          src={abdullahPic}
          alt="abdullah"
        />
      </div>
      <div className="flex mt-8 md:mt-0 flex-col text-center justify-center items-center md:items-start md:text-left text-zinc-900 main-heading text-5xl lg:text-7xl font-extrabold ml-5 md:ml-ml-6 move-up">
        <h1>Hi, I am Abdullah.</h1>{" "}
        <span className="text-4xl block mt-4">A Web Developer!</span>
        <Link
          to="/about"
          className=" text-center bg-slate-700 hover:shadow  mt-6  flex justify-center items-center  secondary-heading font-medium text-3xl md:text-2xl lg-text-4xl mr-2 text-white py-2 px-8 rounded-md hover:bg-slate-200 hover:scale-101 hover:text-slate-700 hover:border-2 hover:border-slate-700 transition-all duration-150 ease-in-out border-box"
        >
          About Me <span className="ml-2"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
