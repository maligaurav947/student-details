import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import fireDb from "../../DB/Firebase";
import { toast } from "react-toastify";
import AddCandidateLayout from "./AddCandidateLayout";

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
  semfivemark: "",
  semsixmark: "",
  semsevenmark: "",
  semeightmark: "",
  semfivelink: "",
  semsixlink: "",
  semsevenlink: "",
  semeightlink: "",
  parentname: "",
  parentno: "",
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
    url,
    semfive,
    semsix,
    semseven,
    semeight,
    semfivemark,
    semsixmark,
    semsevenmark,
    semeightmark,
    semfivelink,
    semsixlink,
    semsevenlink,
    semeightlink,
    parentno,
    parentname,
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
      !semeight ||
      !semfivemark ||
      !semsixmark ||
      !semsevenmark ||
      !semeightmark ||
      !semfivelink ||
      !semsixlink ||
      !semsevenlink ||
      !semeightlink ||
      !parentname ||
      !parentno
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

      setTimeout(() => history("/candidates"), 500);
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="h-screen">
      <Header />
      <form
        className="block items-center justify-center md:lg:xl:2xl:grid p-1 mt-3 md:lg:xl:2xl:mt-5"
        onSubmit={handleSubmit}
      >
        <AddCandidateLayout
          id={id}
          name={name}
          email={email}
          address={address}
          handleInputChange={handleInputChange}
          department={department}
          contact={contact}
          rollno={rollno}
          url={url}
          semfive={semfive}
          semsix={semsix}
          semseven={semseven}
          semeight={semeight}
          semfivemark={semfivemark}
          semsixmark={semsixmark}
          semsevenmark={semsevenmark}
          semeightmark={semeightmark}
          semfivelink={semfivelink}
          semsixlink={semsixlink}
          semsevenlink={semsevenlink}
          semeightlink={semeightlink}
          parentname={parentname}
          parentno={parentno}
        />
      </form>
    </div>
  );
}
