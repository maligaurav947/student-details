import React from "react";

function Feature() {
  return (
    <>
      <main
        style={{
          margin: "0 auto",
          padding: "2em",
        }}
      >
        <h2 className="text-6xl mb-4">Features</h2>
        <p
          className="text-3xl font-semibold"
          style={{
            lineHeight: "1.5",
          }}
        >
          Our student details system offers the following features:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center mt-5">
          <li className="mb-4 w-full card-boxshadow p-4 rounded-lg">
            <h3 className="text-3xl mb-2 font-medium">
              Manage student information
            </h3>
            <p
              className="text-lg font-extralight"
              style={{
                lineHeight: "1.5",
              }}
            >
              Our system allows you to create, update, and delete student
              profiles, including personal information, contact details, and
              academic records.
            </p>
          </li>
          <li className="mb-4 w-full  card-boxshadow p-4 rounded-lg">
            <h3 className="text-3xl mb-2 font-medium">
              Manage course information
            </h3>
            <p
              className="text-lg font-extralight"
              style={{
                lineHeight: "1.5",
              }}
            >
              You can add, update, and delete course details, including course
              name, code, credit hours, and course instructors.
            </p>
          </li>
          <li className="mb-4  w-full  card-boxshadow p-4 rounded-lg">
            <h3 className="text-3xl mb-2 font-medium">Manage grades</h3>
            <p
              className="text-lg font-extralight"
              style={{
                lineHeight: "1.5",
              }}
            >
              Our system allows you to record and manage grades for each student
              and course, including mid-term and final exam grades, as well as
              attendance records.
            </p>
          </li>
          <li className="mb-4 w-full  card-boxshadow p-4 rounded-lg">
            <h3 className="text-3xl mb-2 font-medium">Generate reports</h3>
            <p
              className="text-lg font-extralight"
              style={{
                lineHeight: "1.5",
              }}
            >
              You can generate detailed reports for each student, including
              their academic history, courses taken, and grades received. You
              can also generate reports for individual courses, including
              student grades and attendance records.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Feature;
