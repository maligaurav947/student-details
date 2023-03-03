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
    url,
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

      setTimeout(() => history("/candidates"), 500);
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Header />
      <form
        className="block items-center justify-center md:lg:xl:2xl:grid p-1 mt-3 md:lg:xl:2xl:mt-5"
        style={{}}
        onSubmit={handleSubmit}
      >
        <div class="relative z-0 w-full mb-6 group">
          <input
            name="name"
            type="text"
            id="name"
            value={name || ""}
            onChange={handleInputChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="relative z-0 w-full mb-6 group">
            <input
              name="rollno"
              type="number"
              id="rollno"
              value={rollno || ""}
              onChange={handleInputChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Roll No
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              name="department"
              type="text"
              id="department"
              value={department || ""}
              onChange={handleInputChange}
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Department
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            name="email"
            type="email"
            id="email"
            value={email || ""}
            onChange={handleInputChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            name="contact"
            type="number"
            id="contact"
            value={contact || ""}
            onChange={handleInputChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
            placeholder=" "
            required
          />
          <label
            htmlFor="Contact"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
          <input
            name="address"
            type="text"
            id="address"
            value={address || ""}
            onChange={handleInputChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="url"
            name="url"
            id="url"
            value={url || ""}
            onChange={handleInputChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
            placeholder=" "
          />
          <label
            htmlFor="Profile"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10"
          >
            Profile Url
          </label>
        </div>
        <label>Attandance</label>
        <div class="grid md:grid-cols-4 md:gap-6 mt-2 grid-cols-2 gap-1">
          <div class="relative z-0 w-full mb-6 group ">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-black appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
              type="number"
              name="semfive"
              id="semfive"
              value={semfive || ""}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Semester V
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-black appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
              type="number"
              name="semsix"
              id="semsix"
              value={semsix || ""}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Semester VI
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-black appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
              type="number"
              name="semseven"
              id="semseven"
              value={semseven || ""}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Semester VII
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-black appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
              type="number"
              name="semeight"
              id="semeight"
              value={semeight || ""}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Semester VIII
            </label>
          </div>
        </div>

        <input
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          type="submit"
          value={id ? "Update" : "Submit"}
        />
      </form>
    </>
  );
}
