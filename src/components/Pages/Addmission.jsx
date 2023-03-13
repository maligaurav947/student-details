import React from "react";


export default function App() {
  return (
    <div bordered style={{ maxWidth: "600px" }}>
      <div>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">Name of Course</th>
          <th scope="col">DTE Choice Code</th>
          <th scope="col">Intake</th>
        </tr>
      </div>
      <div>
        <tr>
          <th scope="row" className="table-active">
            1
          </th>
          <td className="table-active">Civil Engineering</td>
          <td className="table-active">538119110</td>
          <td className="table-active">60</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Computer Science & Engineering</td>
          <td>538124210</td>
          <td>60</td>
        </tr>
        <tr>
          <th scope="row" className="table-active">
            3
          </th>
          <td className="table-active">Electrical Engineering</td>
          <td className="table-active">538129310</td>
          <td className="table-active">60</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Mechanical Engineering</td>
          <td>538161210</td>
          <td>60</td>
        </tr>
      </div>
    </div>
  );
}
