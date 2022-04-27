import React from "react";

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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
