import React from "react";

import Header from "../Header/Header";

function About() {
  return (
    <>
      <Header />
      <div
        className=""
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="me-5 items">
          <img src="https://reactjsexample.com/content/images/2022/10/Code-2022-29-41-07.jpg" />
          <h2 className="text-center mb-2 mt-1">Mali Rolan Kailas</h2>
          <p className="text-center">Content Writer / Ui Design</p>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.{" "}
          </p>
        </div>
        <div>
          <img src="https://reactjsexample.com/content/images/2022/10/Code-2022-29-41-07.jpg" />
          <h2>Mali Gaurav Bhausaheb</h2>
          <p>FRONT END DEVELOPER</p>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <div>
            <button className="me-1">CHECK GITHUB</button>
            <button>Follow </button>
          </div>
        </div>
        <div>
          <img src="https://reactjsexample.com/content/images/2022/10/Code-2022-29-41-07.jpg" />
          <h2 className="text-center mb-2 mt-1">Patil Amol Rajendra</h2>
          <p className="text-center">Researcher / Data Handler</p>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
