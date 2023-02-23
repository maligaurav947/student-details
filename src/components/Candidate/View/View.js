import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import fireDb from "../../DB/Firebase";
import { Link, useHistory, useParams } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
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
    <div className="flex gap-2 items-center justify-center">
      <div className="">
        <div className="bg-slate-300 rounded-lg w-96 h-96 mb-2 p-1">
          <div className="flex items-center flex-col gap-2">
            <img src={user.url} className="w-40 h-40 rounded-md" />
            <h2 className="text-2xl">Name: {user.name}</h2>
            <h2 className="text-xl">{user.department}</h2>
          </div>
        </div>
        <div className="p-1 bg-slate-300 w-96 h-80 rounded-lg">
          <p>Email:{user.email}</p>
        </div>
      </div>
      <div className="self-start grid gap-2">
        <div
          className="bg-slate-300 p-2 h-96 rounded-lg"
          style={{
            width: "48.5rem",
          }}
        >
          <p className="text-justify">
            <span className="text-2xl font-bold">About Me:</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-300 w-96 h-60 rounded-lg"></div>
          <div className="bg-slate-300 w-96 h-60 rounded-lg"></div>
        </div>
        <div>
          <div className="bg-slate-300 w-full h-16 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default View;
