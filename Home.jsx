import React from "react";
import ArticleCard from "../cards/ArticleCard";
import Articles from "./Articles";
import image from "../image/hemin.jpg"

const Home = () => {
  return (
    <div>
      <container >
        <div className="flex flex-row  justify-center  ">
          <div className=" justify-start">
        <h3 className="font-bold text-3xl px-8 pt-32 text-white">
          Hello, It's Me
        </h3>
        <h1 className="font-bold text-5xl text-white px-8"> Hemin Sabah</h1>
        <h3 className="font-bold text-3xl   px-8  text-white">
          {" "}
          And I'm a Web Developer
        </h3>
        </div>
        
        <div className="flex  w-1/4 p-14 " >
        <img src={image} className="image flex  rounded-2xl "  ></img>
        </div>
        
        </div>
        <p className="flex text-base justify-center  pt-2 text-white ">
        
          {" "}
          a skilled web developer with experties in HTML & CSS, JavaScript, and
          React. <br/>I love creating visually appealing and interactive website that
          provide a great user experience.{" "}
        </p>
       
        
        
        <div className="text-base px-8 pt-8">
        <Articles/>
        </div>
      </container>
    </div>
  );
};

export default Home;
