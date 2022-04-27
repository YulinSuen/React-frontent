import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import "./App.css";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route
              path="/add-employees"
              element={<CreateEmployeeComponent />}
            />
            <Route
              path="/update-employee/:id"
              element={<UpdateEmployeeComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
