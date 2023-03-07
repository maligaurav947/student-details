import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ data, onDelete }) => {
  return (
    <table className="text-left text-base text-gray-500 flex flex-col justify-center">
      <thead className="">
        <tr className={`2xl:xl:grid grid-cols-4 hidden`}>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Name
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Roll Number
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Department
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Action
          </th>
        </tr>
      </thead>
      {Object.keys(data).map((id, index) => {
        return (
          <tbody className="text-base xl:2xl:block grid">
            <tr className="block xl:2xl:grid grid-cols-4">
              <th className=" flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  {data[id].url ? (
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={data[id].url}
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      alt=""
                      src="https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
                    />
                  )}
                </div>
                <div className="">
                  <div className="font-medium text-gray-700">
                    {data[id].name}
                  </div>
                  <div className="text-gray-400">{data[id].email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{data[id].rollno}</td>
              <td className="px-6 py-4">{data[id].department}</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <Link to={`/view/${id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <circle cx="12" cy="12" r="3.5" stroke="#222222" />
                      <path
                        d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
                        stroke="#222222"
                      />
                    </svg>
                  </Link>
                  <a
                    x-data="{ tooltip: 'Delete' }"
                    href="#"
                    onClick={() => onDelete(id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </a>
                  <Link to={`/update/${id}`}>
                    <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Layout;