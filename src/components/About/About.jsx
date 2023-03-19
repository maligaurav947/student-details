import React from "react";

import Header from "../Header/Header";

function About() {
  return (
    <>
      <Header />
      <div
        className="flex flex-col gap-5 items-center justify-center w-screen  h-screen"
        style={{
          backgroundColor: "#4B3F72",
        }}
      >
        <div className="flex items-center justify-center">
          <div>
            <h2 className="mb-2 mt-1">Mali Rohan Kailas</h2>
            <p className="">Content Writer / Ui Design</p>
          </div>
          <p className="ml-5 w-3/5 ">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.{" "}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h2 className="mb-2 mt-1">Mali Gaurav Bhausaheb</h2>
            <p className="">Content Writer / Ui Design</p>
          </div>
          <p className="ml-5 w-3/5">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.{" "}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h2 className="mb-2 mt-1">Patil Amol Ra</h2>
            <p className="">Content Writer / Ui Design</p>
          </div>
          <p className="ml-5 w-3/5">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
