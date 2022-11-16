import React, { useState, useEffect } from "react";
import Header from "./Pages/Header";
import fireDb from "../Firebase";

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

  return (
    <>
      <Header />
      <div className="candidate">
        {Object.keys(data).map((id, index) => {
          return (
            <div key={id} className="item">
              <div className="img">
                {" "}
                <img src={data[id].url} />
              </div>
              <h1>Name - {data[id].name}</h1>
              <p>Roll No - {data[id].rollno}</p>
              <p>Email - {data[id].email}</p>
              <p>Contact Number - {data[id].contact}</p>
              <p>department - {data[id].department}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
