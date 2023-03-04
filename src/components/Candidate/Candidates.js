import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import fireDb from "../DB/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./Layout";

function Candidates() {
  const [grid, setGrid] = React.useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  const history = useNavigate();
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
          setTimeout(() => history("/candidates"), 10);
        }
      });
    }
  };
  const search = (data) => {
    return data.filter((data) => data.name.toLowerCase().include(query));
  };
  return (
    <>
      <Header />
      <div class="rounded-lg  border border-gray-200 shadow-md m-5 grid place-content-center">
        <div className="w-full grid place-content-center">
          <input
            className="border-b-2 border-black h-10 w-96 outline-none p-1"
            placeholder="Enter name for search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Layout data={data} onDelete={onDelete} />
      </div>
    </>
  );
}

export default Candidates;
