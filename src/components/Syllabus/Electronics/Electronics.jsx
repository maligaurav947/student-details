import React from "react";
import YearLayout from "../YearLayout";

import Syllabus from "./../Syllabus";

function Electronics() {
  return (
    <>
      <Syllabus />
      <div className="grid mt-10">
        <YearLayout name="electronics" />
      </div>
    </>
  );
}

export default Electronics;
