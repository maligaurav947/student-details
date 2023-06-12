import React from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Feature from "./Feature";
import Testimonials from "./Testimonials";
import "./home.css";
function Home() {
  return (
    <>
      <Header />
      <div
        className="hero-background p-5 w-screen text-center grid place-content-center gap-5 home-container bg-zinc-500 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80')]"
        style={{
          backgroundSize: "Cover",
          backgroundBlendMode: "multiply",

          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-3xl lg:xl:md:2xl:text-6xl font-medium mb-3">
          Welcome to the Student Details System
        </h2>
        <p className="text-lg lg:xl:md:2xl:text-2xl font-normal text-white">
          This website allows you to manage student details, courses, and
          grades.
          <br />
          Please use the navigation menu above to get started.
        </p>
      </div>
      <div class="custom-shape-divider-bottom-1678333564 lg:xl:2xl:block hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Feature />
      <div
        className=""
        style={{
          backgroundColor: "#00C4ED",
        }}
      >
        <h2 className="text-6xl pl-8 text-white">Customer Love Service</h2>
        <div className="grid grid-cols-1 mt-4 lg:xl:grid-cols-2">
          <Testimonials
            message="I love how organized and user-friendly the Student Details System is. It's made managing my coursework so much simpler and less stressful!"
            autor="Mali Gaurav"
          />
          <Testimonials
            message="The Student Details System has been a lifesaver for me. It's so easy to keep track of my assignments, grades, and course schedules. I would highly recommend it to any student!"
            autor="Mali Rohan"
          />
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Home;
