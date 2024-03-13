import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";

import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/blog" element = {<Blog/>} />
          <Route path="/contact" element = {<Contact email="dolores.macauley@gmail.com" phone="(555) 123-4567"/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
