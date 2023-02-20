import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import fireDb from "../../DB/Firebase";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  address: "",
  email: "",
  contact: "",
  rollno: "",
  department: "",
  semfive: "",
  semsix: "",
  semseven: "",
  semeight: "",
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
  const {
    name,
    email,
    address,
    contact,
    rollno,
    department,
    img,
    semfive,
    semsix,
    semseven,
    semeight,
  } = state;
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !contact ||
      !rollno ||
      !department ||
      !semfive ||
      !semsix ||
      !semseven ||
      !semeight
    ) {
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

      <div className="addCandidate__section" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <div className="d-grid align-items-center justify-content-center ">
            <div>
              <label htmlFor="name">Name</label>
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
              <label htmlFor="name">Address -</label>
              <input
                name="address"
                type="text"
                id="address"
                value={address || ""}
                placeholder="Enter Your Full Address"
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
            <div>
              <label htmlFor="Profile">Profile Img -</label>
              <input
                type="url"
                name="url"
                id="url"
                value={img || ""}
                onChange={handleInputChange}
                placeholder="Profile Url"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <div className="d-flex align-items-center">
                <h6>
                  Semester 5 <sup>th</sup>
                </h6>
                <input
                  type="number"
                  name="semfive"
                  id="semfive"
                  style={{ width: "50%" }}
                  value={semfive || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex align-items-center">
                <h6>
                  Semester 6 <sup>th</sup>
                </h6>
                <input
                  type="number"
                  name="semsix"
                  id="semsix"
                  style={{ width: "50%" }}
                  value={semsix || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="d-flex align-items-center">
                <h6>
                  Semester 7 <sup>th</sup>
                </h6>
                <input
                  type="number"
                  name="semseven"
                  id="semseven"
                  style={{ width: "50%" }}
                  value={semseven || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex align-items-center">
                <h6>
                  Semester 8 <sup>th</sup>
                </h6>
                <input
                  type="number"
                  name="semeight"
                  id="semeight"
                  style={{ width: "50%" }}
                  value={semeight || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
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
