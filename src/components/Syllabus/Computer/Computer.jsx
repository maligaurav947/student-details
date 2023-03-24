import React from "react";

import Syllabus from "../Syllabus";

import YearLayout from "./../YearLayout";

function Computer() {
  return (
    <>
      <Syllabus />
      <div className="grid mt-10">
        <YearLayout name="computer" />
      </div>
    </>
  );
}

export default Computer;
