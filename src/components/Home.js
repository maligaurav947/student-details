import React, { useState, useEffect } from "react";
import Header from "./Pages/Header";
import fireDb from "../Firebase";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
function Home() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState({});

  useEffect(() => {
    fireDb.child("candidate").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  const onDelete = (id) => {
    if (window.confirm("Are You Sure You Want To Delete This User ?")) {
      fireDb.child(`candidate/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("User Got Successfuly Deleted");
        }
      });
    }
  };
  return (
    <>
      <Header />
      <MDBContainer className="candidate d-flex flex-wrap">
        {Object.keys(data).map((id, index) => {
          return (
            <MDBCard key={id} className="item">
              <div className="img">
                {data[id].url ? (
                  <MDBCardImage src={data[id].url} />
                ) : (
                  <MDBCardImage
                    src="http://raysensenbach.com/wp-content/uploads/2013/04/default.jpg"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
              <MDBCardTitle className="text-capitalize">
                <span className="font-weight-bold">Name</span> - {data[id].name}
              </MDBCardTitle>
              <MDBCardSubTitle className="mb-2">
                <span className="font-weight-bold">Roll No</span> -{" "}
                {data[id].rollno}
              </MDBCardSubTitle>
              {/* <MDBCardSubTitle className="mb-2">
                <span className="font-weight-bold">Email </span>-{" "}
                {data[id].email}
              </MDBCardSubTitle> */}
              <MDBCardSubTitle className="mb-2">
                <span className="font-weight-bold">Contact Number</span> -{" "}
                {data[id].contact}
              </MDBCardSubTitle>
              <MDBCardSubTitle className="text-capitalize mb-3">
                <span className="font-weight-bold">Department</span> -{" "}
                {data[id].department}
              </MDBCardSubTitle>
              <MDBBtnGroup className="d-flex align-items-center justify-content-between ">
                <Link to={`update/${id}`}>
                  <Button variant="outline-primary" className="mr-2">
                    Edit
                  </Button>
                </Link>
                <Link to={`/view/${id}`}>
                  {" "}
                  <Button variant="outline-success" className="mr-2">
                    View
                  </Button>
                </Link>
                <Button variant="outline-danger" onClick={() => onDelete(id)}>
                  Delete
                </Button>
              </MDBBtnGroup>
            </MDBCard>
          );
        })}
      </MDBContainer>
    </>
  );
}

export default Home;
