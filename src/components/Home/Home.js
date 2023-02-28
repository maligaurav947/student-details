import React from "react";
import Marquees from "../asst/Marquees";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Feature from "./Feature";
import Testimonials from "./Testimonials";
var eye = require("../asst/img/MonstersEye.png");
var BrooklynRelaxing = require("../asst/img/People of BrooklynRelaxing.png");
function Home() {
  return (
    <>
      <Marquees />
      <Header />
      <div
        className="w-screen text-center grid place-content-center bg-no-repeat"
        style={{
          backgroundSize: "Cover",
          height: "80vh",

          backgroundAttachment: "fixed",
        }}
      >
        <img src={eye} className="absolute right-24 w-28 top-48" />
        <img
          src={BrooklynRelaxing}
          className="left-24 w-72 top-96 absolute hidden lg:xl:md:block"
        />
        <h2 className="text-6xl font-medium mb-3">
          Welcome to the Student Details System
        </h2>
        <p className="text-2xl font-normal">
          This website allows you to manage student details, courses, and
          grades.
        </p>
        <p className="text-2xl font-normal">
          Please use the navigation menu above to get started.
        </p>
      </div>
      <Feature />
      <div className="grid grid-cols-1 lg:xl:grid-cols-2">
        <Testimonials message="I love how organized and user-friendly the Student Details System is. It's made managing my coursework so much simpler and less stressful!" />
        <Testimonials message="The Student Details System has been a lifesaver for me. It's so easy to keep track of my assignments, grades, and course schedules. I would highly recommend it to any student!" />
      </div>
      <Contact />
    </>
  );
}

export default Home;
