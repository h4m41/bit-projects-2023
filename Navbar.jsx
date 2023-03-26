import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../redux/redux";
import { english, kurdish } from "../redux/redux";

import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import Buttons from "../buttons/buttons";
import "./navbar.style.css";
import Home from "./Home";
import About from "./About";
import AboutKu from "./AboutKu";
const Navbar = (props) => {
  const handleClick = () => {};
  const lang = "1";
  //  const loginText = useSelector((state) => state.lang.loginText);
  //  const dispatch = useDispatch();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.user.data.language);
  return (
    <>
      <nav className=" flex flex-column p-4  justify-center space-x-5 bg-slate-700 text-1xl text-white">
        <Link to="/">
          <Buttons text="Home" handleClick={handleClick} />
        </Link>
        <Link to="/about">
          <Buttons text="About" handleClick={handleClick} />
        </Link>
      </nav>

      <div className="flex p-4 bg-slate-600 bg-cover text-white">
        {/* <Link to="/aboutku"> */}
        <Buttons
          text={language === "" ? "English" : "كوردى"}
          handleClick={() =>
            language === "" ? dispatch(english()) : dispatch(kurdish())
          }
        />
        {/* </Link> */}

        {/* <Buttons text='Login' handleClick={handleClick}/> */}
        {/* // onClick={() => dispatch(changeLang())} */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
      </div>
    </>
  );
};

export default Navbar;
