import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Form from "./common/EmployeeForm";

function CreateEmployeeComponent(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };

    EmployeeService.createEmployee(employee).then(() => {
      navigate("/employees");
    });
  };

  return (
    <Form
      navigate={navigate}
      handleSave={saveEmployee}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmailId={setEmailId}
      firstName={firstName}
      lastName={lastName}
      emailId={emailId}
    />
  );
}

export default CreateEmployeeComponent;
