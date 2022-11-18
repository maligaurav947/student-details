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
              <p className="capitalize">
                <span className="bold">Name</span> - {data[id].name}
              </p>
              <p>
                <span className="bold">Roll No</span> - {data[id].rollno}
              </p>
              <p>
                <span className="bold">Email </span>- {data[id].email}
              </p>
              <p>
                <span className="bold">Contact Number</span> -{" "}
                {data[id].contact}
              </p>
              <p className="capitalize">
                <span className="bold">Department</span> - {data[id].department}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
