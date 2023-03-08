import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import SingleBlog from "./components/SingleBlog";
import MobileNavigation from "./components/MobileNavigation";
import DarkModeToggler from "./UI/DarkModeToggler";

function App() {
  const [windowWidth, setWindowWith] = useState(window.innerWidth);
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const toggleMobileNavbarHandler = () => {
    setShowMobileNavbar((preValue) => !preValue);
  };
  const closeMobileNavbarHandler = () => {
    setShowMobileNavbar(false);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 900) {
      setShowMobileNavigation(true);
    } else {
      setShowMobileNavigation(false);
    }
  }, [windowWidth]);

  return (
    <BrowserRouter>
      <Navbar
        isMobileNavigation={showMobileNavigation}
        toggleNavbar={toggleMobileNavbarHandler}
        mobileNavbarIsVisible={showMobileNavbar}
      />
      {showMobileNavbar && showMobileNavigation && (
        <MobileNavigation onClose={closeMobileNavbarHandler} />
      )}
      <DarkModeToggler />

      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<SingleBlog />} path="/posts/:slug" />
        <Route element={<Blogs />} path="/posts" />
        <Route element={<Contact />} path="/contact" />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
