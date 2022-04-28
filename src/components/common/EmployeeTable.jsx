import React from "react";
import EmployeeService from "../../services/EmployeeService";

function EmployeeTable(props) {
  const { employees, navigate } = props;

  return (
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
            <td>
              <button
                className="btn btn-info"
                onClick={() => navigate(`/update-employee/${employee.id}`)}
              >
                更新
              </button>
              <button
                className="btn btn-danger"
                style={{ marginLeft: "10px" }}
                onClick={() => EmployeeService.deleteEmployee(employee.id)}
              >
                删除
              </button>
              <button
                className="btn btn-info"
                style={{ marginLeft: "10px" }}
                onClick={() => navigate(`/view-employee/${employee.id}`)}
              >
                员工信息
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
