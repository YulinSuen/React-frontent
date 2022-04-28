import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ViewEmployComponent(props) {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then(({ data }) => {
      setEmployee(data);
    });
  });

  return (
    <div className="card col-md-6 offset-md-3">
      <h3 className="text-center">员工信息</h3>
      <div className="card-body">
        <div className="row">
          <label>姓: {employee.firstName}</label>
          <label>名: {employee.lastName}</label>
          <label>电子邮件: {employee.emailId}</label>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployComponent;
