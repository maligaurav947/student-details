import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./dist/css/main.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Addmission from "./components/Pages/Addmission";
import AddCandidate from "./components/Pages/AddCandidate";
import Home from "./components/Home";
import View from "./components/Pages/View";
import About from "./components/Pages/About";

function App() {
  return (
    <>
      <HashRouter>
        <ToastContainer postion="top-center" />
        <Routes>
          <Route index element={<Home />} exact />
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
