import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import EmployeeTable from "./common/EmployeeTable";

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
      <EmployeeTable employees={employees} navigate={navigate} />
    </div>
  );
}

export default ListEmployeeComponent;
