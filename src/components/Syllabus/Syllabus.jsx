import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Syllabus() {
  return (
    <>
      <Header />
      <div className="grid place-content-center mt-10">
        <div className="flex gap-5 justify-center text-white">
          <Link to="/computer">
            <div
              className="p-3 rounded-md"
              style={{
                backgroundColor: "#4b3f72",
              }}
            >
              Computer and Inforamtion Technology
            </div>
          </Link>
          <Link to="/electronics">
            <div
              style={{
                backgroundColor: "#4b3f72",
              }}
              className="p-3 rounded-md"
            >
              Electronics and Telecommunication Engineering
            </div>{" "}
          </Link>
          <Link to="/mechanical">
            <div
              className=" p-3 rounded-md"
              style={{
                backgroundColor: "#4b3f72",
              }}
            >
              Mechanical Engineering
            </div>{" "}
          </Link>
          <Link to="/civil">
            <div
              className=" p-3 rounded-md"
              style={{
                backgroundColor: "#4b3f72",
              }}
            >
              Civil Engineering
            </div>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Syllabus;
