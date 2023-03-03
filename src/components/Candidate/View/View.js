import React, { useEffect, useState } from "react";

import fireDb from "../../DB/Firebase";
import { Link, useHistory, useParams } from "react-router-dom";

import Header from "./../../Header/Header";
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
      <Header />
      <div className="flex flex-col items-center justify-center gap-8 h-full">
        <div className="grid md:lg:xl:2xl:flex gap-2 items-center justify-center">
          <div className="">
            <div className="w-full grid place-content-center text-center mr-2">
              <div className="w-full grid place-content-center">
                {user.url ? (
                  <img src={user.url} className="w-40 h-40 rounded-md" />
                ) : (
                  <img
                    src="https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                    className="w-40 h-40 rounded-full"
                  />
                )}
              </div>
              <div className="">
                <h2 className="text-2xl">{user.name}</h2>
                <p className="text-lg">{user.department}</p>
              </div>
              <div className="mt-2">
                <Link to={`/update/${id}`}>
                  <button className="bg-blue-500 text-white w-32 h-10 text-xl rounded-lg">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <span className="lg:md:xl:2xl:border-l-8 border-black">
            <div className="ml-2 p-1 grid gap-5">
              <div className="text-lg">Address:-{user.address}</div>
              <div className="text-lg">Email ID:-{user.email}</div>
              <div className="text-lg">Phone Number:-{user.contact}</div>
              <div className="text-lg">Department:-{user.department}</div>
              <div className="text-lg">
                Collage:-Shri Jaykumar Rawal Institute of Technology, Dondaicha
              </div>
            </div>
          </span>
        </div>
        <div className="flex xl:md:lg:2xl:w-2/3 items-center justify-center w-full p-2 text-base text-justify xl:md:lg:2xl:text-center">
          Shri Jaykumar Rawal Institute of Technology was set up as a part of
          the self-powered plans of Dondaicha Dadasaheb knowledge city in 2011
          with the objective to erect a truly world class institute in the rural
          part where students from the vicinity would be benefited from the
          services that matched global standards. SJRIT was conceived by
          visionary leader, Hon. Shri Jaykumar Bhau Rawal , former cabinet
          minister for environment for Maharashtra State. The institute has
          grown at a remarkable pace and has gone on to become an institute of
          repute within the country.
        </div>
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-2 gap-10 place-content-center">
          <div className="w-full h-12 flex items-center justify-between gap-5">
            <h2 className="text-lg">Semester V</h2>
            <div>
              <h4>Attandance</h4>
              <h2>{user.semfive}/100</h2>
            </div>
            <div>
              <h4>Percentage</h4>
              <h2>85/100</h2>
            </div>
            <a href="" className="text-blue-600">
              Download The Result
            </a>
          </div>
          <div className="w-full h-12 flex items-center justify-between gap-5">
            <h2>Semester VI</h2>
            <div>
              <h4>Attandance</h4>
              <h2>{user.semsix}/100</h2>
            </div>
            <div>
              <h4>Percentage</h4>
              <h2>85/100</h2>
            </div>
            <a href="" className="text-blue-600">
              Download The Result
            </a>
          </div>
          <div className="w-full h-12 flex items-center justify-between gap-5">
            <h2>Semester VII</h2>
            <div>
              <h4>Attandance</h4>
              <h2>{user.semseven}/100</h2>
            </div>
            <div>
              <h4>Percentage</h4>
              <h2>85/100</h2>
            </div>
            <a href="" className="text-blue-600">
              Download The Result
            </a>
          </div>
          <div className="w-full h-12 flex items-center justify-between gap-5">
            <h2>Semester VIII</h2>
            <div>
              <h4>Attandance</h4>
              <h2>{user.semeight}/100</h2>
            </div>
            <div>
              <h4>Percentage</h4>
              <h2>85/100</h2>
            </div>
            <a href="" className="text-blue-600">
              Download The Result
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
