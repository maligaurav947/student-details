import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import fireDb from "../DB/Firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

function Candidates() {
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
        className="mb-5 z-50"
        style={{
          position: "fixed",
          right: "15px",
          cursor: "pointer",
          fontSize: "1.5rem",
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
        }}
      >
        {grid ? (
          <div className="">
            <BsFillGrid1X2Fill />
          </div>
        ) : (
          <div className="">
            <AiOutlineBars />
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center ">
        {!grid ? (
          <>
            {Object.keys(data).map((id, index) => {
              return (
                <>
                  <div
                    class="card-boxshadow p-2 relative text-black"
                    style={{
                      width: "360px",
                    }}
                  >
                    <div className="grid justify-center">
                      <img
                        class="w-32 h-32 rounded-full mb-3"
                        src={data[id].url}
                        alt="Profile Image"
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <h5 class="text-xl">
                        <span className="font-bold">Name</span>:{data[id].name}
                      </h5>
                      <p class="text-xl">
                        <span className="font-bold">Roll No</span>:
                        {data[id].rollno}
                      </p>
                      <p class="text-xl">
                        <span className="font-bold">Contact Number</span>:
                        {data[id].contact}
                      </p>
                      <p class="text-xl">
                        <span className="font-bold">Department</span>:
                        {data[id].department}
                      </p>

                      <div class="mt-4 outline-none">
                        <div className="flex justify-between gap-5">
                          <button className="pt-2 pb-2 hover:bg-blue-400 pr-4 pl-4 rounded-md border-2 border-blue-500">
                            Edit
                          </button>
                          <button className="pt-2 pb-2 pr-4 pl-4 rounded-md border-2 border-yellow-500 hover:bg-yellow-400">
                            View
                          </button>
                          <button className="pt-2 pb-2 pr-4 pl-4 rounded-md border-2 border-red-500 hover:bg-red-400">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <div className="">
            <div>
              <div>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Roll No</th>
                  <th scope="col">Actions</th>
                </tr>
              </div>
              <div>
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
                          <button>Edit</button>
                        </Link>
                        <Link to={`/view/${id}`}>
                          <button>View</button>
                        </Link>

                        <button onClick={() => onDelete(id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Candidates;
