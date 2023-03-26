import React from "react";

function AddCandidateLayout({
  name,
  handleInputChange,
  rollno,
  department,
  email,
  contact,
  address,
  url,
  semfive,
  semsix,
  semseven,
  semeight,
  semfivemark,
  semsixmark,
  semsevenmark,
  semeightmark,
  id,
}) {
  return (
    <>
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
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
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
      <div className="grid grid-cols-2 gap-3">
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
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-black appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            placeholder=" "
            type="number"
            name="contact"
            id="contact"
            value={contact || ""}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="contact"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>
        </div>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          name="address"
          type="text"
          id="address"
          value={address || ""}
          onChange={handleInputChange}
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
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
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b-2 border-black"
          placeholder=" "
        />
        <label
          htmlFor="Profile"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10"
        >
          Profile Url
        </label>
      </div>
      <label className="text-black font-bold">Attandance</label>
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
      <label className="text-black font-bold">Percentage % </label>
      <div class="grid md:grid-cols-4 md:gap-6 mt-2 grid-cols-2 gap-1">
        <div class="relative z-0 w-full mb-6 group ">
          <input
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-black appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            placeholder=" "
            type="number"
            name="semfivemark"
            id="semfivemark"
            value={semfivemark || ""}
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
            name="semsixmark"
            id="semsixmark"
            value={semsixmark || ""}
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
            name="semsevenmark"
            id="semsevenmark"
            value={semsevenmark || ""}
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
            name="semeightmark"
            id="semeightmark"
            value={semeightmark || ""}
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
      <div className="flex justify-end">
        <input
          className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-slate-300 cursor-pointer "
          type="submit"
          value={id ? "Update" : "Submit"}
        />
      </div>
    </>
  );
}

export default AddCandidateLayout;
