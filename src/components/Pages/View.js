import React, { useEffect, useState } from "react";
import Header from "./Header";
import fireDb from "../../Firebase";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import { Link, useHistory, useParams } from "react-router-dom";
function View() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fireDb
      .child(`candidate/${id}`)
      .get()
      .then((sanpshot) => {
        if (sanpshot.exists()) {
          setUser({ ...sanpshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-2">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="#">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  {user.url ? (
                    <MDBCardImage
                      src={user.url}
                      alt="avatar"
                      className="rounded-circle"
                      style={{
                        width: "100px",
                        objectFit: "cover",
                        height: "100px",
                      }}
                      fluid
                    />
                  ) : (
                    <MDBCardImage
                      src="http://raysensenbach.com/wp-content/uploads/2013/04/default.jpg"
                      alt="avatar"
                      className="rounded-circle"
                      style={{
                        width: "100px",
                        objectFit: "cover",
                        height: "100px",
                      }}
                      fluid
                    />
                  )}

                  <p className="text-muted mb-1 mt-1">{user.department}</p>
                  <p className="text-muted mb-2">{user.address}</p>
                  <Link to={`/update/${id}`}>
                    <MDBBtn style={{ maxHeight: "38px", maxWidth: "105px" }}>
                      Edit Profile
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBCardText>
                        <a
                          href="  https://sjrit.ac.in/Admission-Process/"
                          target={"_blank"}
                        >
                          Admission Process
                        </a>
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBCardText>
                        <a
                          href="https://sjrit.ac.in/About-Training-Placement-Cell/"
                          target={"_blank"}
                        >
                          Training Placement Cell
                        </a>
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBCardText>
                        <a
                          href="https://sjrit.ac.in/Academic-Calendar/"
                          target={"_blank"}
                        >
                          Academic Calendar
                        </a>
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBCardText>
                        <a
                          href="https://sjrit.ac.in/Scholarships/"
                          target={"_blank"}
                        >
                          Scholarships
                        </a>
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBCardText>
                        <a
                          href="https://sjrit.ac.in/About-Institute/"
                          target={"_blank"}
                        >
                          About Institute
                        </a>
                      </MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>{" "}
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {user.name}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Departments</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {user.department}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>College Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Shri Jaykumar Rawal Institute of Technology
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {user.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {user.contact}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {user.address}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Attendance
                        </span>{" "}
                        5 to 6 Semester
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Semester 5<sup>th</sup>
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          striped
                          animated
                          width={user.semfive}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Semester 6<sup>th</sup>
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          striped
                          animated
                          width={user.semsix}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Attendance
                        </span>{" "}
                        7 to 8 Semester
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Semester 7<sup>th</sup>
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          striped
                          animated
                          width={user.semseven}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Semester 8<sup>th</sup>
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          striped
                          animated
                          width={user.semeight}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default View;
