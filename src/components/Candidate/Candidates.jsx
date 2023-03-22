import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import fireDb from "../DB/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./Layout";

function Candidates() {
  // const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  const history = useNavigate();
  useEffect(() => {
    fireDb.child("candidate").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setUser({ ...snapshot.val() });
      } else {
        setUser({});
      }
    });
    return () => {
      setUser({});
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

  return (
    <>
      <Header />
      {/* <div className="grid place-content-center">
        <input
          className="border-b-2 border-black h-10 w-96 outline-none p-1 mb-4 mt-5 "
          placeholder="Enter name for search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
      <Layout user={user} onDelete={onDelete} />
    </>
  );
}

export default Candidates;
