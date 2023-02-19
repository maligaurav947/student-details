import React from "react";
import Marquee from "react-fast-marquee";
function Marquees() {
  return (
    <Marquee
      className="h-100 w-100 p-2 "
      gradientWidth={0}
      speed={150}
      style={{
        backgroundColor: "#5e6a75",
        overflow: "hidden",
        color: "white",
      }}
    >
      <span className="mr-2">
        Welcome to Shri Jaykumar Rawal Institute of Technology
      </span>
      <span className="mr-2">
        Email: 5381jaytech@gmail.com / 1713pricipal@msbte.com
      </span>
      <span>Phone:02566-299345 / 9423517700 / 9422795625</span>
    </Marquee>
  );
}

export default Marquees;
