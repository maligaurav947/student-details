import React from "react";
import { Link } from "react-router-dom";
import Syllabus from "../Syllabus";

function Civil() {
  return (
    <>
      <Syllabus />
      <div className="grid mt-10">
        <div className="flex gap-5 justify-center text-white">
          <Link to="/civil/first">
            <div
              className="p-3 rounded-md"
              style={{
                backgroundColor: "#4b3f72",
              }}
            >
              First Year
            </div>
          </Link>
          <div
            className="p-3 rounded-md"
            style={{
              backgroundColor: "#4b3f72",
            }}
          >
            Secound Year
          </div>
          <div
            className="p-3 rounded-md"
            style={{
              backgroundColor: "#4b3f72",
            }}
          >
            Third Year
          </div>
          <div
            className="p-3 rounded-md"
            style={{
              backgroundColor: "#4b3f72",
            }}
          >
            Forth Year
          </div>
        </div>
      </div>
    </>
  );
}

export default Civil;
