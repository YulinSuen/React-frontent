import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Form from "./common/EmployeeForm";

function UpdateEmployeeComponent(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      const { firstName, lastName, emailId } = res.data;
      setFirstName(firstName);
      setLastName(lastName);
      setEmailId(emailId);
    });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };
    EmployeeService.updateEmployee(employee, id).then(() => {
      navigate("/employees");
    });
  };

  return (
    <Form
      navigate={navigate}
      handleSave={updateEmployee}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmailId={setEmailId}
      firstName={firstName}
      lastName={lastName}
      emailId={emailId}
    />
  );
}

export default UpdateEmployeeComponent;
