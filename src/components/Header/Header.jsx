import { Link } from "react-router-dom";
import { React, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import { FcAbout, FcGoogle } from "react-icons/fc";
import { ImBooks } from "react-icons/im";
import { GoThreeBars } from "react-icons/go";
import { signInWithGoogle } from "../DB/Firebase";
function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <>
        <nav
          className="z-50 w-full flex flex-wrap items-center justify-between px-2 py-3"
          style={{
            backgroundColor: "#160C28",
          }}
        >
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div
              className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
              style={{
                color: "#181425",
              }}
            >
              <a
                className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#"
              >
                Student Details Form
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <GoThreeBars />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
              x
            >
              <ul
                className="flex flex-col lg:flex-row list-none lg:ml-auto text-sm  "
                style={{
                  color: "#E8D5B5",
                }}
              >
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75">
                    <MdGroup />
                    <Link to="/candidates" className="ml-2">
                      candidates
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75">
                    <AiOutlineUserAdd />
                    <Link to="/add" className="ml-2">
                      Add Candidates
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:opacity-75">
                    <ImBooks />
                    <Link to="/syllabus" className="ml-2">
                      Syllabus
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug  hover:opacity-75">
                    <FcAbout />
                    <Link to="/about" className="ml-2">
                      About Us
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug  hover:opacity-75">
                    <FcGoogle />
                    <div className="ml-2">Login</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}

export default Header;
