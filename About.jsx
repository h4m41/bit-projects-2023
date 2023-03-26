import React from "react";
import image from "../image/heminl.jpg";

const About = () => {
  return (
    <div className="flex flex-row  m-40">
      <div className="flex ">
        <figure className="flex w-52  ">
          <img src={image} className="flex rounded-full" />
        </figure>
      </div>
      <div className="about flex pl-32 ">
        <p>
          <h1 className="flex font-bold text-3xl">Education</h1>
          <p>
            {" "}
            -Bachelor's Degree in ComputerScience from American University of
            Iraq Sulaimani
          </p>
          <h1 className="flex font-bold text-3xl">Work Eperience</h1>
          <p> -I have worked as a freelancer for 2 Years in Web design</p>
          <h1 className="flex font-bold text-3xl">Experties</h1>
          <p>
            {" "}
            I am profecient in creating dynamic and interactive web application
            using React
            <br />
            working with Redux, React Router and other essential tools further
            enhance performance.
          </p>
          <h1 className="flex font-bold text-3xl">Skills</h1>
          <ul>
            <ul>HTML & CSS</ul>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
