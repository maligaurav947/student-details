import React from "react";

import YearLayout from "../YearLayout";
import Syllabus from "./../Syllabus";

function Mechanical() {
  return (
    <>
      <Syllabus />
      <div className="grid mt-10">
        <YearLayout name="mechanical" />
      </div>
    </>
  );
}

export default Mechanical;
