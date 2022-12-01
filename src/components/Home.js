import React, { useState, useEffect } from "react";
import Header from "./Pages/Header";
import fireDb from "../Firebase";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
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
      <div className="candidate">
        {Object.keys(data).map((id, index) => {
          return (
            <div key={id} className="item">
              <div className="img">
                {data[id].url ? (
                  <img src={data[id].url} />
                ) : (
                  <img
                    src="http://raysensenbach.com/wp-content/uploads/2013/04/default.jpg"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
              <p className="text-capitalize">
                <span className="font-weight-bold">Name</span> - {data[id].name}
              </p>
              <p>
                <span className="font-weight-bold">Roll No</span> -{" "}
                {data[id].rollno}
              </p>
              <p>
                <span className="font-weight-bold">Email </span>-{" "}
                {data[id].email}
              </p>
              <p>
                <span className="font-weight-bold">Contact Number</span> -{" "}
                {data[id].contact}
              </p>
              <p className="text-capitalize">
                <span className="font-weight-bold">Department</span> -{" "}
                {data[id].department}
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <Link to={`update/${id}`}>
                  <Button variant="outline-primary">Edit</Button>
                </Link>
                <Link to={`/view/${id}`}>
                  {" "}
                  <Button variant="outline-success">View</Button>
                </Link>
                <Button variant="outline-danger" onClick={() => onDelete(id)}>
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
