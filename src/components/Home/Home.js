import React from "react";
import Marquees from "../asst/Marquees";
import Header from "../Header/Header";
import Feature from "./Feature";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
