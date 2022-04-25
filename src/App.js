import React from "react";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="container">
        <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
