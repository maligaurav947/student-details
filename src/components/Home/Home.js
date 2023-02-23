import React from "react";
import Marquees from "../asst/Marquees";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Feature from "./Feature";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Marquees />
      <Header />

      <div
        className="bg-red-300 text-white w-screen text-center grid place-content-center bg-no-repeat"
        style={{
          backgroundSize: "Cover",
          height: "80vh",
          backgroundImage: `url(https://burst.shopifycdn.com/photos/moody-green-vine-wall-texture.jpg?width=925&format=pjpg&exif=1&iptc=1)`,
          backgroundAttachment: "fixed",
        }}
      >
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
