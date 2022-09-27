import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import SingleBlog from "./components/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<SingleBlog />} path="/post/:slug" />
        <Route element={<Blogs />} path="/post" />

        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
