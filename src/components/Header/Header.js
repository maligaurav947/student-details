import { Link } from "react-router-dom";
import { React, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { GoThreeBars } from "react-icons/go";
function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <>
        <nav className="relative flex flex-wrap items-center justify-between bg-black px-2 py-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
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
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-sm  ">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75">
                    <MdGroup />
                    <Link to="/candidates" className="ml-2">
                      candidates
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75">
                    <AiOutlineUserAdd />
                    <Link to="/add" className="ml-2">
                      Add Candidates
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75">
                    <FcAbout />
                    <Link to="/about" className="ml-2">
                      About Us
                    </Link>
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
