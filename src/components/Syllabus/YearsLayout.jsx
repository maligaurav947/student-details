import React from "react";

import Syllabus from "./Syllabus";
import YearLayout from "./YearLayout";

function YearsLayout(props) {
  return (
    <>
      <Syllabus />
      <div className="grid mt-10">
        <YearLayout name={props.department} />
      </div>
      <a href="">
        <div className="flex justify-center text-white mt-10">
          <h1
            className="p-3 rounded-md"
            style={{
              backgroundColor: "#4b3f72",
            }}
          >
            Download The {props.department} {props.currentYear} Year Syllabus
          </h1>
        </div>
      </a>
    </>
  );
}

export default YearsLayout;
