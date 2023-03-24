import RounterApp from "./components/Router/RounterApp";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";

function App() {
  return (
    <>
      <HashRouter>
        <ToastContainer postion="top-center" />
        <RounterApp />
      </HashRouter>
    </>
  );
}

export default App;
