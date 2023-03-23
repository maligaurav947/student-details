import React from "react";
import Civil from "./Civil";

function First() {
  return (
    <>
      <Civil />
      <div className="flex justify-center text-white mt-10">
        <a
          href="#"
          className="p-3 rounded-md"
          style={{
            backgroundColor: "#4b3f72",
          }}
        >
          Download The First Year Syllabus
        </a>
      </div>
    </>
  );
}

export default First;
