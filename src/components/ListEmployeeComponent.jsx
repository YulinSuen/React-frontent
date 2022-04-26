import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ListEmployeeComponent(props) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then(({ data }) => setEmployees(data));
  });

  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/add-employees")}
      >
        添加员工
      </button>
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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponent;
