import {
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import React from "react";
import { Button } from "react-bootstrap";
import Header from "./Header";

function About() {
  return (
    <>
      <Header />
      <MDBContainer
        className="d-flex  align-items-center justify-content-center about-page "
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <MDBCard className="me-5 items">
          <MDBCardImage src="https://reactjsexample.com/content/images/2022/10/Code-2022-29-41-07.jpg" />
          <MDBCardTitle className="text-center mb-2 mt-1">
            Mali Rolan Kailas
          </MDBCardTitle>
          <MDBCardSubTitle className="text-center">
            Content Writer / Ui Design
          </MDBCardSubTitle>
          <MDBCardBody>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.{" "}
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="me-5  items">
          <MDBCardImage src="https://reactjsexample.com/content/images/2022/10/Code-2022-29-41-07.jpg" />
          <MDBCardTitle className="text-center mb-2 mt-1">
            Mali Gaurav Bhausaheb
          </MDBCardTitle>
          <MDBCardSubTitle className="text-center">
            FRONT END DEVELOPER
          </MDBCardSubTitle>
          <MDBCardBody>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </MDBCardBody>
          <MDBBtnGroup>
            <Button variant="outline-primary" className="me-1">
              CHECK GITHUB
            </Button>
            <Button variant="outline-success">Follow </Button>
          </MDBBtnGroup>
        </MDBCard>
        <MDBCard>
          <MDBCardImage src="https://reactjsexample.com/content/images/2022/10/Code-2022-29-41-07.jpg" />
          <MDBCardTitle className="text-center mb-2 mt-1">
            Patil Amol Rajendra
          </MDBCardTitle>
          <MDBCardSubTitle className="text-center">
            Researcher / Data Handler
          </MDBCardSubTitle>
          <MDBCardBody>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default About;
