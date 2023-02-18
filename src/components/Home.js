import React, { useState, useEffect } from "react";
import Header from "./Pages/Header";
import fireDb from "../Firebase";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
function Home() {
  const [grid, setGrid] = React.useState(false);
  const [data, setData] = useState({});

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
      <div
        onClick={() => {
          setGrid(!grid);
        }}
        className=""
        style={{
          position: "absolute",
          right: "40px",
          top: "60px",
          cursor: "pointer",
          fontSize: "2rem",
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
        }}
      >
        {grid ? (
          <div className="d-flex align-items-center gap-2">
            <BsFillGrid1X2Fill />
            Grid
          </div>
        ) : (
          <div className="d-flex align-items-center gap-2">
            <AiOutlineBars />
            Colume
          </div>
        )}
      </div>
      <MDBContainer className="candidate d-flex flex-wrap">
        {grid ? (
          <>
            {Object.keys(data).map((id, index) => {
              return (
                <>
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
                      <span className="font-weight-bold">Name</span> -{" "}
                      {data[id].name}
                    </MDBCardTitle>
                    <MDBCardSubTitle className="mb-2">
                      <span className="font-weight-bold">Roll No</span> -{" "}
                      {data[id].rollno}
                    </MDBCardSubTitle>
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
                      <Button
                        variant="outline-danger"
                        onClick={() => onDelete(id)}
                      >
                        Delete
                      </Button>
                    </MDBBtnGroup>
                  </MDBCard>
                </>
              );
            })}
          </>
        ) : (
          <>
            <MDBTable align="middle">
              <MDBTableHead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Roll No</th>
                  <th scope="col">Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={data[id].url}
                            alt=""
                            style={{ width: "45px", height: "45px" }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">{data[id].name}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-muted mb-0">
                          {" "}
                          {data[id].department}
                        </p>
                      </td>
                      <td>
                        <p className="text-muted mb-0">{data[id].email}</p>
                      </td>
                      <td>{data[id].rollno}</td>
                      <td>
                        <Link to={`update/${id}`}>
                          <MDBBtn color="link" rounded size="sm">
                            Edit
                          </MDBBtn>
                        </Link>
                        <Link to={`/view/${id}`}>
                          <MDBBtn color="link" rounded size="sm">
                            View
                          </MDBBtn>
                        </Link>

                        <MDBBtn
                          color="link"
                          rounded
                          size="sm"
                          onClick={() => onDelete(id)}
                        >
                          Delete
                        </MDBBtn>
                      </td>
                    </tr>
                  );
                })}
              </MDBTableBody>
            </MDBTable>
          </>
        )}
      </MDBContainer>
    </>
  );
}

export default Home;
