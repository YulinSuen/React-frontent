import React from "react";
import { Route, Routes } from "react-router-dom";
import ListEmployeeComponent from "./ListEmployeeComponent";
import CreateEmployeeComponent from "./CreateEmployeeComponent";
import UpdateEmployeeComponent from "./UpdateEmployeeComponent";

function BodyComponent(props) {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employees" element={<CreateEmployeeComponent />} />
        <Route
          path="/update-employee/:id"
          element={<UpdateEmployeeComponent />}
        />
      </Routes>
    </div>
  );
}

export default BodyComponent;
