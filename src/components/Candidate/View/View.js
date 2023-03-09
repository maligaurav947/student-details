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
      <div className="flex mt-2 flex-col items-center justify-center gap-5 h-full">
        <div className="grid md:lg:xl:2xl:flex gap-2 items-center justify-center">
          <div className="">
            <div className="w-full grid place-content-center text-center mr-2 ">
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
                <p className="text-lg text-black">{user.department}</p>
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
          <span className="lg:md:xl:2xl:border-l-8 border-black ">
            <div className="ml-2 p-1 grid gap-1 ">
              <div className="text-lg bg-blue-200 p-1">
                Address:-{user.address}
              </div>
              <div className="text-lg  p-1">Email ID:-{user.email}</div>
              <div className="text-lg bg-blue-200 p-1">
                Phone Number:-{user.contact}
              </div>
              <div className="text-lg p-1 ">
                Department:-
                <span className="text-black">{user.department}</span>
              </div>
              <div className="text-lg bg-blue-200 p-1">
                Collage:-Shri Jaykumar Rawal Institute of Technology, Dondaicha
              </div>
            </div>
          </span>
        </div>
        <div className="flex bg-blue-200 items-center justify-center w-full p-4 text-base text-justify ">
          <div className="xl:md:lg:2xl:w-2/3">
            Shri Jaykumar Rawal Institute of Technology was set up as a part of
            the self-powered plans of Dondaicha Dadasaheb knowledge city in 2011
            with the objective to erect a truly world class institute in the
            rural part where students from the vicinity would be benefited from
            the services that matched global standards. SJRIT was conceived by
            visionary leader, Hon. Shri Jaykumar Bhau Rawal , former cabinet
            minister for environment for Maharashtra State. The institute has
            grown at a remarkable pace and has gone on to become an institute of
            repute within the country.
          </div>
        </div>
        <div className="grid  grid-cols-1 md:lg:xl:grid-cols-2 gap-5 place-content-center text-black">
          <div className="h-12 w-full flex items-center justify-between rounded-md pt-2 pb-2 pl-4 pr-4 gap-5 bg-blue-200">
            <h2 className="text-black">Semester V</h2>
            <div>
              <h4 className="text-black">Attandance</h4>
              <h2 className="text-black">{user.semfive}/100</h2>
            </div>
            <div>
              <h4 className="text-black">Percentage</h4>
              <h2 className="text-black">85/100</h2>
            </div>
            <a href="" className="text-blue-600">
              Download The Result
            </a>
          </div>
          <div className="h-12 w-full flex items-center justify-between rounded-md pt-2 pb-2 pl-4 pr-4 gap-5 bg-blue-200">
            <h2 className="text-black">Semester VI</h2>
            <div>
              <h4 className="text-black">Attandance</h4>
              <h2 className="text-black">{user.semsix}/100</h2>
            </div>
            <div>
              <h4 className="text-black">Percentage</h4>
              <h2 className="text-black">85/100</h2>
            </div>
            <a href="" className="text-blue-600">
              Download The Result
            </a>
          </div>
          <div className="h-12 w-full flex items-center justify-between rounded-md pt-2 pb-2 pl-4 pr-4 gap-5 bg-blue-200">
            <h2 className="text-black">Semester VII</h2>
            <div>
              <h4 className="text-black">Attandance</h4>
              <h2 className="text-black">{user.semseven}/100</h2>
            </div>
            <div>
              <h4 className="text-black">Percentage</h4>
              <h2 className="text-black">85/100</h2>
            </div>
            <a href="" className="text-blue-600">
              Download The Result
            </a>
          </div>
          <div className="h-12 w-full flex items-center justify-between rounded-md pt-2 pb-2 pl-4 pr-4 gap-5 bg-blue-200">
            <h2 className="text-black">Semester VIII</h2>
            <div>
              <h4 className="text-black">Attandance</h4>
              <h2 className="text-black">{user.semeight}/100</h2>
            </div>
            <div>
              <h4 className="text-black">Percentage</h4>
              <h2 className="text-black">85/100</h2>
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
