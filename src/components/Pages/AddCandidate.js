import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import fireDb from "../../Firebase";

import Tooltip from "react-bootstrap/Tooltip";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
  rollno: "",
  department: "",
};
export default function AddCandidate() {
  const [data, setData] = useState([]);
  const [state, setState] = useState(initialState);
  const history = useNavigate();
  const { id } = useParams();
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
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);
  const { name, email, contact, rollno, department, img } = state;
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !contact || !rollno || !department) {
      toast.error("Please Provide Following Information");
    } else {
      if (!id) {
        fireDb.child("candidate").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Candidate Added");
          }
        });
      } else {
        fireDb.child(`candidate/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Candidate Update");
          }
        });
      }

      setTimeout(() => history("/"), 500);
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Header />
      <div className="addCandidate__section">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name -</label>
            <input
              name="name"
              type="text"
              id="name"
              value={name || ""}
              placeholder="Enter Your Full Name"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="name">Roll NO -</label>
            <input
              name="rollno"
              type="number"
              id="rollno"
              value={rollno || ""}
              placeholder="Enter Your Roll Number"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Department -</label>
            <input
              name="department"
              type="text"
              id="department"
              value={department || ""}
              placeholder="Enter Your Department"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email -</label>
            <input
              name="email"
              type="email"
              id="email"
              value={email || ""}
              placeholder="Enter Your Email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Contact">Contact -</label>
            <input
              name="contact"
              type="number"
              id="contact"
              value={contact || ""}
              placeholder="Enter Your Contact"
              onChange={handleInputChange}
            />
          </div>
          <div className="ur">
            <div>
              <label htmlFor="Contact">Img Url -</label>

              <input
                type="url"
                name="url"
                id="url"
                value={img || ""}
                onChange={handleInputChange}
                placeholder="Profile Url"
              />
            </div>
            {/* <input
              type="file"
              name="img"
              id="img"
              value={img}
              onChange={handleInputChange}
              className="img-file"
              style={{
                border: "none",
              }}
            /> */}
          </div>
          <input
            type="submit"
            value={id ? "Update" : "Save"}
            className="button-17"
          />
        </form>
      </div>
    </>
  );
}
