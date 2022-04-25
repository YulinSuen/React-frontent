import React, { useState } from "react";

function ListEmployeeComponent(props) {
  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponent;
