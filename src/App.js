import { Routes, Route, HashRouter } from "react-router-dom";
import "./main.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Addmission from "./components/Pages/Addmission";
import AddCandidate from "./components/Candidate/AddCand/AddCandidate";

import View from "./components/Candidate/View/View";
import About from "./components/About/About";
import Candidates from "./components/Candidate/Candidates";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <HashRouter>
        <ToastContainer postion="top-center" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/add" element={<AddCandidate />} />
          <Route path="/update/:id" element={<AddCandidate />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
          <Route path="/addmission" element={<Addmission />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
