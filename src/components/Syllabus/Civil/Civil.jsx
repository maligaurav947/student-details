import React from "react";
import { Link } from "react-router-dom";
import Syllabus from "../Syllabus";
import YearLayout from "../YearLayout";

function Civil() {
  return (
    <>
      <Syllabus />
      <div className="grid mt-10">
        <YearLayout name="civil" />
      </div>
    </>
  );
}

export default Civil;
