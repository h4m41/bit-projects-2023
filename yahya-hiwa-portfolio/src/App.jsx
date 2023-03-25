//import react library and packeg
import { createContext, useState } from "react";
//---------------------------------//
// import style file
import "./App.css";
//------------------//
// components
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
//-----------------------------------//
export const ThemeType = createContext();
function App() {
  const isDark = useSelector((state) => state.theme.value);
  return (
    <div className={`w-full h-screen ${isDark ? ` bg-big-stone-900` : ``}`}>
      <Navbar />
      <Aside />
      <main className={`${isDark ? ` bg-big-stone-900` : ``}`}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
