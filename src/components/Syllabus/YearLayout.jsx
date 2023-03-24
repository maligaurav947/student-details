import React from "react";
import { Link } from "react-router-dom";

function YearLayout(props) {
  return (
    <div className="flex gap-5 justify-center text-white">
      <Link to={`/${props.name}/first`}>
        <div
          className="p-3 rounded-md"
          style={{
            backgroundColor: "#4b3f72",
          }}
        >
          First Year
        </div>
      </Link>
      <Link to={`/${props.name}/secound`}>
        <div
          className="p-3 rounded-md"
          style={{
            backgroundColor: "#4b3f72",
          }}
        >
          Secound Year
        </div>
      </Link>
      <Link to={`/${props.name}/third`}>
        <div
          className="p-3 rounded-md"
          style={{
            backgroundColor: "#4b3f72",
          }}
        >
          Third Year
        </div>
      </Link>
      <Link to={`/${props.name}/forth`}>
        <div
          className="p-3 rounded-md"
          style={{
            backgroundColor: "#4b3f72",
          }}
        >
          Forth Year
        </div>
      </Link>
    </div>
  );
}

export default YearLayout;
